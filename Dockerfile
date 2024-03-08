#FROM node:alpine

#WORKDIR /usr/src/app

#COPY . /usr/src/app

#RUN npm install -g @angular/cli

#RUN npm install

#EXPOSE 80

#CMD ["ng", "serve", "--port", "80"]



FROM node:20-alpine As build

#Setup the working directory
WORKDIR /usr/src/ng-app

#Copy package.json
COPY package.json package-lock.json ./

#Install dependencies
RUN npm install

#Copy other files and folder to working directory
COPY . .

#Build Angular application in PROD mode
RUN npm run build

#Download NGINX Image
FROM nginx:1.25.4

#Copy built angular files to NGINX HTML folder
COPY --from=build /usr/src/ng-app/dist/ng-command-center/ /usr/share/nginx/html

EXPOSE 80