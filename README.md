Swagger to Kong Admin 
================

Simple cli tool to deplot  swagger definition in kong gateway using Nodejs and oclif framework 

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oastokong.svg)](https://npmjs.org/package/oastokong)
[![License](https://img.shields.io/npm/l/oastokong.svg)](https://github.com/VimukthiMayadunne/oastokonng/blob/master/package.json)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![Downloads/week](https://img.shields.io/npm/dw/oastokong.svg)](https://npmjs.org/package/oastokong)

# Pre-requisite 
- node.js
- Kong



# Installation
You can install `oastokong` either through `npm` or by cloning the code from this GitHub repo.  This README covers the installation steps with `npm`.


# Setup

1) Run the following command  in the terminal 

```bash
$ npm install -g oastokong
```

         
# Runnig the Cli-Tool
Make sure kong Admin APi is runing on the localhost:8001 and Admin api security is disabled.


# 1st Methord
1) Navigate to the location where the swagger file is located 
   Make Sure the swagger file is named as swagger.yaml  
2) Run the command 'oastokong'
    This will deploy the API in kong gateway 

#### Example

```bash
$ oastokong
```

# 2nd Methord

1) Navigate to the location where the swagger/OAS file is located 
2) Run the command 'oastokong -n='$file_name'
    This will deploy the API in kong gateway 

#### Example

Assume that the swagger definition is in a file called my file in Yaml format 

```bash
$ oastokong -n=myfile.yaml
```

Credits - oclif framework  https://oclif.io
