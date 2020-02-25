var models = require('../models/index');
var Artist = require('../models/artist');

// Artist 만들기
exports.create = function (req, res) {
   // req.body 를 가진 아티스트 모델 만들기
   models.Artist.create(req.body).then(function (artist) {
      res.redirect('/artists');
   });
};

// 아티스트 목록
exports.list = function (req, res) {
   // 아티스트 전체 목록을 날짜별로 정렬
   models.Artist.findAll({
      orderby : 'createdAt DESC'
   }).then(function (artists) {
      res.render('artist-list', {
         title: 'List artists',
         artists: artists
      });
   });
};

// 아티스트 id로 얻기
exports.byId = function (req, res) {
   models.Artist.find({
      where: {
         id: req.params.id
      }
   }).then(function (artist) {
      res.json(artist);
   });
};

// id로 업데이트 하기
exports.update = function (req, res) {
   models.Artist.find({
      where: {
         id: req.params.id
      }
   }).then(function (artist) {
      if (artist) {
         artist.updateAttributes({
            name: req.body.name,
            description: req.body.description,
            album: req.body.album,
            year: req.body.year,
            UserId: req.body.user_id
         }).then(function (artist) {
            res.send(artist);
         });
      }
   });
};

// id로 삭제하기
exports.delete = function (req, res) {
   models.Artist.destroy({
      where: {
         id: req.params.id
      }
   }).then(function (artist) {
      res.json(artist);
   });
};