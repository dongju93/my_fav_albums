exports.show = function (req, res) {
   // 날짜별 정렬
   var topArtists = [
      {
         name: 'Kanye West',
         description: 'Best rapper alive.',
         album: 'https://m.media-amazon.com/images/I/61g6lFzJriL._SS500_.jpg',
         year: '2008'
      },
      {
         name: 'blink-182',
         description: 'Always make good music.',
         album: 'https://images-na.ssl-images-amazon.com/images/I/71jrpSvQLJL.jpg',
         year: '2011'
      },
      {
         name: 'Dog Blood',
         description: 'Refreshing, Stunning, EDM.',
         album: 'https://i1.sndcdn.com/artworks-000544080261-1dqscf-t500x500.jpg',
         year: '2019'
      },
      {
         name: '장범준',
         description: '장범준만 할 수 있는, 장범준만의 노래.',
         album: 'https://www.viva100.com/mnt/images/file/2016y/03m/19d/20160319001940458_1.png',
         year: '2016'
      }
   ];

   res.render('index', {
      title: 'The Best albums of my favorite artists',
      callToAction: '환영합니다! 아래 버튼을 클릭하셔서 좋아하는 앨범을 등록해보세요.',
      artists: topArtists
   });
};