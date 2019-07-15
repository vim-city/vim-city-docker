# VIM City

_Welcome to VIM City! Vim City is an interactive top down game designed to teach beginners how to use VIM commands while solving Javascript coding challenges. VIM commands are keyboard shortcuts for navigating a cursor._

## How It Works

To start playing, you have the option of signing in/signing up with your username and password, or signing up with GitHub.

We highly suggest that beginners read through our How To Play instructions to get a detailed overview of how VIM commands work in this game.

Players are then prompted through their first challenge where they most move their avatar to the target destination. Upon reaching the destination, in order to progress in the game, the user must fix a faulty piece of code riddled with errors using the VIM commands they just learned.

Once a player successfuly completes the coding challenge, they will be able to collect their points and move on to the next challenge.

We hope you enjoy learning VIM through this game!

# Getting Started

Vim City was built using two separate applications. Our second application utilizes Docker to build containers to run the user code. The following instructions will help you get started with our Docker application.

# Set-Up

Fork and/or clone this repository to get started!

# Installation

Install dependencies for the project with
`npm run start`

In the command line run the following commands:
* docker build -t <your username>/node-web-app
* docker run -p 49160:8080 -d <your username>/node-web-app


# Deployment

VIM City is deployed on Heroku at https://vim-city.herokuapp.com/.

# Built With

VIM City was built using Node.js, Express, PostgreSQL, Sequelize, React, Redux, Docker, Ace Editor, Kubernetes, Material-UI, Phaser.js

## Authors

Taylor Thompson, Dyana Avalos, Nikki Bergamini, Stephanie Siyi Wu
