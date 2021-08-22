FROM node:11.15.0-alpine as build-step
RUN mkdir ./app
# copy . /app/


COPY package.json ./app
WORKDIR /app

RUN npm install
# COPY . .
RUN npm run  ng serve
# FROM nginx:1.16.0-alpine as prod-stage
# COPY --from=build-step /app/dist/my-client /usr/share/nginx/html
EXPOSE  80
# CMD ["nginx","-g","daemon off"]




# # build environment
# FROM node:10 as builder

# RUN mkdir -p /usr/src/app
# WORKDIR /usr/src/app
# ENV PATH /usr/src/app/node_modules/.bin:$PATH
# COPY ./client/app/package.json /usr/src/app/
# RUN npm install
# RUN npm install react-scripts@1.1.1 -g --silent
# COPY ./client/app/ /usr/src/app
# RUN npm run build

# # production environment
# FROM nginx:1.19.4-alpine


# # Static build
# COPY --from=builder /usr/src/app/build /usr/share/nginx/html

# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]


