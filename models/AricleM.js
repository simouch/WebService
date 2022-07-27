const db = require('../db');



module.exports = class Article {
  constructor(Réf_article, libellé_article,alternative,num_alternative,des_alternative,CODE_LECTRA,Code_Modele,Code_coloris,Code_dimension,Code_article_sansetoile) {
   this.IDArticle = IDArticle;
    
  }

  save() {
    return db.execute(
      'INSERT INTO article (IDArticle, Code) VALUES (?, ?)',
      [this.IDArticle, this.Code]
    );
  }

};

