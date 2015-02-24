#Example of use Typescript with browserify
Example demonstrate how to create rich applications using typescript with browserify. There are two build versions with different functionality.
###Project structure
In "common" folder contains general files which need to both build versions. In example shows:
* how use third party library (jQuery)
* "tsmodule" is typescript module which use different module "tsmoduleDependency" to each versions, but they have same interface
* "newJs" is plain javascript module which use different module "newJsDependency" to each versions, but they have same interface
* "House" is typescript class which have different interface for to build versions
* "domExtensions" show typescript module with same interface for to build versions


### Installation

    npm install
    grunt