const router = require("express").Router();
const Book = require("../models/book");
const multer = require("multer");
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads");
    },
    filename: (req, file, cb) => {
        cb(null, req.params.id + ".jpg");
    },
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 6,
    },
});

router.route("/add").post((req, res) => {
    console.log(req.body.title);



    const book = Book({
        id: req.body.id,
        title: req.body.title,
        subtitle: req.body.subtitle,
        price: req.body.price,
        description: req.body.description,
        address: req.body.address,
        author: req.body.author,
        // bookImageUrl: req.body.bookImageUrl,
        bookImageUrl: "https://picsum.photos/200/300",     
    });
    console.log('from phone');
    console.log(book);
   


    book
        .save()
        .then((result) => {
            res.status(200).json({
                data: result
            });
        })
        .catch((err) => {
            console.log(err), res.status(400).json({
                err: err
            });
        });
});
router.get("/getbooks", (req, res) => {
    Book.find({}, (err, result) => {
        if (err) return res.status(400).json({
            err: err
        });
        return res.status(200).json({
            data: result
        });
    });
});
module.exports = router;