FROM node as NodeBuilder 
WORKDIR /client
COPY /client /client 
RUN npm
RUN npm build

FROM golang as GoBuilder
WORKDIR /server
COPY /server /server
RUN CGO_ENABLED=0 go build main.go
RUN chmod +x main

FROM scratch
COPY --from=NodeBuilder /client/dist /
COPY --from=GoBuilder /server /

EXPOSE 8080 8080

CMD [ "./main" ]