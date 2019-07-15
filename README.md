# VIM City

_Welcome to VIM City! Vim City is an interactive top down game designed to teach beginners how to use VIM commands while solving Javascript coding challenges. VIM commands are keyboard shortcuts for navigating a cursor._

# Getting Started

Vim City was built using two separate applications. One application is our game application and the second application is a Docker application to evaluate user written code. This repository contains the code for our second application. The following instructions will help you get started with our Docker application. You can find our game application on [Github](https://github.com/vim-city/vim-city)

# Set-Up

Fork and/or clone this repository to get started! Create an account on [Docker](https://www.docker.com/) and download the application.

# Installation

Install dependencies for the project with
`npm run start`

In the command line run the following commands:
* `docker build -t <your username>/node-web-app`
* `docker run -p 49160:8080 -d <your username>/node-web-app`


# Deployment

VIM City is deployed on Heroku at https://vim-city.herokuapp.com/

# Built With

VIM City was built using Node.js, Express, PostgreSQL, Sequelize,React, Redux, Docker, Ace Editor, Kubernetes, Material-UI, Phaser.js

## Authors

Taylor Thompson, Dyana Avalos, Nikki Bergamini, Stephanie Siyi Wu
