# How to use npm

If your project doesn't already have a `package.json` file:

1. In the root of your project directory, type `npm init`  
1. `npm init` will create a `package.json` for you. You can supply as much information as you want here. You can always edit `package.json` later. Once you have a `package.json`, you can install packages, e.g., `axios`
1. In the root of your project, type `npm install axios`.
1. This will create a `node_modules` folder and a `package-lock.json` in your project directory.  
    - `node_modules` holds the package you just installed and its dependencies  
    - `package-lock.json` is a listing of the whole tree of your dependencies (i.e., the packages you have installed and their dependencies)  
1. `npm install axios` will also change `package.json`, putting `axios` in its `dependencies` section

If your project already has a `package.json`:
1. In the root of your project type `npm install`. This will install any dependencies listed in the `package.json` file.
2. Install any packages you need the same way we installed `axios` above.
