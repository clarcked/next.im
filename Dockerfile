FROM node:14
WORKDIR /usr/src  
COPY ./ ./
RUN ls -al
RUN npm install  
RUN npx next telemetry disable
EXPOSE 3000
CMD ["npm","run","dev"]
