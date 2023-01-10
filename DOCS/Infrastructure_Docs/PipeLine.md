## CI/CD pipline Configuration File ( .circleci/config.yml )

Setting our orbs to install necessary tools to run our app

```yml
version: 2.1
orbs:
  node: circleci/node@5.0.2
  eb: circleci/aws-elastic-beanstalk@2.0.1
  aws-cli: circleci/aws-cli@3.1.1
```

Then we need to set our jobs ( commands we want to executed )

```yml
jobs:
  build:
    docker:
      # the base image can run most needed actions with orbs
      - image: "cimg/node:14.15"

    steps:
      # install node and checkout code
      - node/install:
          node-version: "14.15"
      - checkout

      # Use root level package.json to install dependencies in the frontend app
      - run:
          name: Install Front-End Dependencies
          command: |
            echo "NODE --version" 
            echo $(node --version)
            echo "NPM --version" 
            echo $(npm --version)
            npm run frontend:install

      #  Install dependencies in the the backend API
      - run:
          name: Install API Dependencies
          command: |
            echo "TODO: Install dependencies in the the backend API "
            npm run api:install

      #  Lint the frontend
      - run:
          name: Front-End Lint
          command: |
            echo "TODO: Lint the frontend"
            npm run frontend:lint

      # Build the frontend app
      - run:
          name: Front-End Build
          command: |
            echo "TODO: Build the frontend app"
            npm run frontend:build

      #  Build the backend API
      - run:
          name: API Build
          command: |
            echo "TODO: Build the backend API"
            npm run api:build

  # deploy step will run only after manual approval
  deploy:
    docker:
      - image: "cimg/base:stable"
      # more setup needed for aws, node, elastic beanstalk

    steps:
      - node/install:
          node-version: "14.15"
      - eb/setup
      - aws-cli/setup
      - checkout
      - run:
          name: Deploy App

          #  Install, build, deploy in both apps
          command: |
            echo "# TODO: Install, build, deploy in both apps"
            npm run frontend:install
            npm run api:install
            npm run frontend:build
            npm run api:build
            npm run deploy
            echo "DEPLOYED SUCCESSFULLY :)"
```

Lastly we want to set our workflow to orchestrate the jobs

```yml
workflows:
  udagram:
    jobs:
      - build
      - hold:
          filters:
            branches:
              only:
                - master
          type: approval
          requires:
            - build
      - deploy:
          requires:
            - hold
```
