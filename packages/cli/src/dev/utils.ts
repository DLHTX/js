import { AppType, ContractLibrariesType, FrameworkType, LanguageType, LibraryType, PackageManagerType } from "../core/types/ProjectType";
import { runCommand } from "../create/helpers/run-command";
import chokidar from 'chokidar';
import { generate } from "../generate/command";
import ora from "ora";

type DetectionsType = {
  detectedPackageManager: PackageManagerType;
  detectedLanguage: LanguageType;
  detectedLibrary: LibraryType;
  detectedFramework: FrameworkType;
  detectedAppType: AppType;
  detectedContractLibrary: ContractLibrariesType;
}

export const runDev = async (detections: DetectionsType, options: any, mobilePlatform: "ios" | "android") => {
  const { detectedPackageManager, detectedFramework } = detections;
  let runner: string = "";
  let command: string[] = [];
  const isJs = ["npm", "yarn", "pnpm"].includes(detectedPackageManager);

  switch (detectedPackageManager) {
    case "npm":
    case "yarn":
    case "pnpm":
      const { runner: jsRunner, command: jsCommand } = getJsDevCommand(detectedFramework, detectedPackageManager, mobilePlatform);
      runner = jsRunner;
      command = jsCommand;
      break;
    case "pip":
    case "pipenv":
    case "poetry":
      const { runner: pythonRunner, command: pythonCommand } = getPythonDevCommand(detectedFramework, detectedPackageManager);
      runner = pythonRunner;
      command = pythonCommand;
      break;
    case "go-modules":
      const { runner: goRunner, command: goCommand } = getGoDevCommand(detectedFramework, options.path);
      runner = goRunner;
      command = goCommand;
      break;
    default:
      break;
  }

  // Initialize watcher.
  let watcher = chokidar.watch(options.path, {
    ignored: [
      /(^|[\/\\])\../, // ignore dotfiles
      '**/node_modules/**', // ignore node_modules
      'package.json', // ignore package.json
      'thirdweb.json' // ignore thirdweb.json
    ],
    persistent: true
  });

  // Something to use when events are received.
  const log = console.log.bind(console);

  // This will enable us to run the generate command on file change.
  watcher
    .on('change', async file => {
      log(`File ${file} has been changed`);
      // Re-run the generate command on file change.
      if (isJs) {
        await generate({ path: options.path, debug: false });
        ora("Refetched ABIs for any contracts found").info();
      }
    })
    .on('unlink', path => log(`File ${path} has been removed`));

  const stopWatching = () => {
    watcher.close();
    process.exit();
  };

  try {
    ora(`Your contract's ABIs are being optimized in the background while you develop, and will listen for any new ones.`).info();
    ora(`Attempting to run ${runner} ${command.join(" ")}, based on the detected project`).info();
    await runCommand(runner, command, true);
  } catch (error) {
    throw new Error("Project failed to run! Try running `thirdweb dev -d` to see a more detailed error");
  }

  // On Ctrl+C or server stop, clean up watcher.
  process.on('SIGINT', () => {
    stopWatching();
  });

  process.on('SIGTERM', () => {
    stopWatching();
  });
};

const getJsDevCommand = (detectedFramework: FrameworkType, detectedPackageManager: PackageManagerType, mobilePlatform: "ios" | "android") => {
  const prefix = detectedPackageManager === "yarn" ? "" : "run";
  let finalCommand: {
    runner: string;
    command: string[];
  } = {
    runner: "",
    command: [],
  };

  switch (detectedFramework) {
    case "next":
      finalCommand.runner = detectedPackageManager;
      finalCommand.command = ["dev"];
      break;
    case "gatsby":
      finalCommand.runner = "npx";
      finalCommand.command = ["gatsby", "develop"];
      break;
    case "remix":
      finalCommand.runner = detectedPackageManager;
      finalCommand.command = ["dev"];
      break;
    case "cra":
      finalCommand.runner = detectedPackageManager;
      finalCommand.command = ["start"];
      break;
    case "vue":
      finalCommand.runner = detectedPackageManager;
      finalCommand.command = ["serve"];
      break;
    case "expo":
      finalCommand.runner = detectedPackageManager;
      finalCommand.command = [mobilePlatform];
      break;
    case "react-native-cli":
      finalCommand.runner = "npx";
      finalCommand.command = ["react-native", `run-${mobilePlatform}`];
      break;
    case "vite":
      finalCommand.runner = detectedPackageManager;
      finalCommand.command = ["vite"];
    case "fastify":
      finalCommand.runner = detectedPackageManager;
      finalCommand.command = ["dev"];
    default:
      finalCommand.runner = detectedPackageManager;
      finalCommand.command = ["dev"];
      break;
  }

  if (prefix) {
    finalCommand.command.unshift(prefix);
  }

  return finalCommand;
};

const getPythonDevCommand = (detectedFramework: FrameworkType, detectedPackageManager: PackageManagerType) => {
  const isPipEnv = detectedPackageManager === "pipenv";
  const isPoetry = detectedPackageManager === "poetry";
  const prefix = isPipEnv ? "pipenv run " : isPoetry ? "poetry run " : "";
  let finalCommand: {
    runner: string;
    command: string[];
  } = {
    runner: "",
    command: [],
  };

  switch (detectedFramework) {
    case "django":
      finalCommand.runner = "python";
      finalCommand.command = ["manage.py", "runserver"];
      break;
    case "flask":
      finalCommand.runner = "flask";
      finalCommand.command = ["run"];
      break;
    case "fastapi":
      finalCommand.runner = "uvicorn";
      finalCommand.command = ["main:app", "--reload"];
      break;
    default:
      break;
  }
  if (prefix) {
    finalCommand.command.unshift(prefix);
  }

  return finalCommand;
};

const getGoDevCommand = (detectedFramework: FrameworkType, projectPath: string) => {
  let finalCommand: {
    runner: string;
    command: string[];
  } = {
    runner: "",
    command: [],
  };

  switch (detectedFramework) {
    case "gin":
      finalCommand.runner = "go";
      finalCommand.command = ["run", projectPath];
      break;
    case "echo":
      finalCommand.runner = "go";
      finalCommand.command = ["run", projectPath];
      break;
    case "revel":
      finalCommand.runner = "revel";
      finalCommand.command = ["run", projectPath];
      break;
    case "fiber":
      finalCommand.runner = "go";
      finalCommand.command = ["run", projectPath];
      break;
    default:
      break;
  }

  return finalCommand;
};