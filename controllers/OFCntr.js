const OF = require("../models/OFM")
const article=require("../models/AricleM")

exports.getOF=(req,res)=>{

OF.getALL()
.then(([rows,fielData]) => {
    console.log(rows);
    res.json(rows)

}).catch((err) => {
   console.log(err); 
});
};
exports.post = (req, res) => {
    const IDOFabrication =req.body.IDOFabrication;
    const OFAbrication=req.body.OFAbrication;
    const IDArticle =req.body.IDArticle;
    const IDAr_Couleur=req.body.IDAr_Couleur;
    const  OFab = new OF (
      IDOFabrication,
        OFAbrication,
        IDArticle,
        IDAr_Couleur
      );
  
      OFab.save()
      
        .then(() => {
        res.json({state: 'ok', msg: 'of ajouté'})
       
        console.log("of ajouté",OFab)
      })
      .catch(err => console.log(err));
  };
 

exports.getBYID=(req,res)=>{
    const OFID =  req.params.IDOFabrication
    OF.findById(OFID).then(([OF]) => {
        res.json(OF)
        console.log(OF);
    }).catch((err) => {
        console.log(err);
    });
};
exports.update=(req,res)=>{
    const IDOF= parseInt(req.params.IDOFabrication)
    const OFAbrication =req.body.OFAbrication
  
    OF.updateOne(IDOF,OFAbrication)
    .then(() => {
        res.json({state: 'ok', msg: 'of modifié',data:OF})
       
        console.log("of modifié")
      })
      .catch(err => console.log(err));

};
exports.delete =(req,res)=>{
    const OFID =  req.params.IDOFabrication
    OF.deleteOF(OFID).then(() => {
      
        console.log(OF);
        res.json({state: 'ok', msg: 'of supprimé'})
    }).catch((err) => {
        console.log(err);
    });
};
// exports.getArticles = (req, res, next) => {
//     article.fetchAll()
//       .then(([rows, fieldData]) => {
//         res.json({state: 'ok', msg: 'of ',data:rows})
//       })
//       .catch(err => console.log(err));
//   };
//   exports.getArticle = (req, res, next) => {
//     const ArticleID = req.params.ArticleID;
//     article.findById(ArticleID)
//       .then(([product]) => {
//         res.json(product)
//         console.log(product);
//       })
//       .catch(err => console.log(err));
//   };
//   exports.getOF = (req, res, next) => {
//     OF.getOF(of => {
//       aricle.fetchAll(aricle => {
//         const ofArticle = [];
//         for (article of articles) {
//           const cartProductData = of.article.find(
//             prod => prod.id === article.id
//           );
//           if (cartProductData) {
//             ofArticle.push({ productData: product, qty: cartProductData.qty });
//           }
//         }
//         res.json(ofArticle)
//       ;
//       });
//     });
//   };
//   exports.postCart = (req, res, next) => {
//     const prodId = req.body.productId;
//     Product.findById(prodId, product => {
//       Cart.addProduct(prodId, product.price);
//     });
//     res.redirect('/cart');
//   };
  
//   exports.postCartDeleteProduct = (req, res, next) => {
//     const prodId = req.body.productId;
//     Product.findById(prodId, product => {
//       Cart.deleteProduct(prodId, product.price);
//       res.redirect('/cart');
//     });
//   };
  
 
  
 
