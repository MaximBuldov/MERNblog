"use strict";

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require("body-parser");

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require("cors");

var _cors2 = _interopRequireDefault(_cors);

var _PostControllers = require("./controllers/PostControllers");

var _PostControllers2 = _interopRequireDefault(_PostControllers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Post = new _PostControllers2.default();

var app = (0, _express2.default)();
_mongoose2.default.connect('mongodb://localhost/blog', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.json());
app.use((0, _cors2.default)());

app.get("/posts", Post.index);
app.post("/posts", Post.create);
app.get("/posts/:id", Post.read);
app.delete('/posts/:id', Post.delete);
app.put('/posts/:id', Post.update);

app.listen(3333, function () {
    console.log('server run');
});