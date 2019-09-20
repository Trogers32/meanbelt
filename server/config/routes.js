  

const controller = require("../controllers/controller.js")

module.exports = function(app){
    app.get('/', (req, res) => {
        controller.index(req,res);
    });
    app.get('/Pets', (req, res) => {
        controller.index(req,res);
    });
    app.post('/Pets', (req, res) => {
        controller.newPet(req,res);
    });
    app.get('/Pets/:name', (req, res) => {
        controller.getPet(req,res); 
    });
    app.put('/Pets/up/:id', (req, res) => {
        controller.rateUpComment(req,res); 
    });
    app.put('/Pet/:id', (req, res) => {
        console.log(req.body)
        controller.editPet(req,res); 
    });
    app.put('/Pets/down/:cid', (req, res) => {
        controller.rateDownComment(req,res); 
    });
    app.put('/Pets/:id', (req, res) => {
        controller.upPet(req,res);
    });
    app.delete('/remove/:id', (req, res) => {
        controller.rid(req,res);
    });
    app.use(function(req,res) { 
        res.redirect('/'); 
    }); 
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}    