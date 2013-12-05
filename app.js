var express = require("express")
  , app = express()
  , port = 4000;

  app.set("views", __dirname + "/templates");
  app.set("view engine", "ejs");
  app.get("/", function(request, response) {
    response.render("index.ejs", {env: app.settings.env, title: "Hello world"});
  });

  app.listen(port);
  console.log("listening on port 4000");
