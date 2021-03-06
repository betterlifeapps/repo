/* !!! IMPORTANT: Rename "mymodule" below and add your module to Angular Modules above. */

angular.module('dcs', [])

.service('Dcs', [function(){
    
    var dcs_list = [
                {
          key: 'Batman Begins',
          name: 'Batman Begins',
          director:'Christopher Nolan',
          cast:'Christian Bale, Michael Caine, Liam Neeson, Katie Holmes, Gary Oldman, Cillian Murphy, Tom Wilkinson, Rutger Hauer, Ken Watanabe, Morgan Freeman',
          synopsis: 'A young Bruce Wayne (Christian Bale) travels to the Far East, where he\'s trained in the martial arts by Henri Ducard (Liam Neeson), a member of the mysterious League of Shadows. When Ducard reveals the League\'s true purpose -- the complete destruction of Gotham City -- Wayne returns to Gotham intent on cleaning up the city without resorting to murder. With the help of Alfred (Michael Caine), his loyal butler, and Lucius Fox (Morgan Freeman), a tech expert at Wayne Enterprises, Batman is born.',
          preview: 'http://www.hans-zimmer.com/~hybrid/zimmer/begins_front.jpg',  
          poster: 'https://cdn.shopify.com/s/files/1/1416/8662/products/batman_begins_advance_original_film_art_spo_2000x.jpg?v=1536052910',
          release: 'June 15, 2005.',
          code: 'dc1', 
        },
                        {
          key: 'Superman Returns',
          name: 'Superman Returns',
          director:'Bryan Singer',
          cast:'Brandon Routh, Kate Bosworth, Kevin Spacey, James Marsden, Frank Langella, Eva Marie Saint, Parker Posey, Kal Penn, Sam Huntington, Tristan Lake Leabu',
          synopsis: 'While Lex Luthor (Kevin Spacey) plots to destroy him once and for all, the Man of Steel (Brandon Routh) returns after a long absence to a much-changed world. Lois Lane (Kate Bosworth) has moved on with her life, and society has learned to survive without him. Superman must find a way to reconnect with her and find his place in a world that may no longer need him.',
          preview: 'https://vignette.wikia.nocookie.net/dcmovies/images/e/ec/Superman-supermanreturns.jpg/revision/latest?cb=20110909233413',  
          poster: 'https://images-na.ssl-images-amazon.com/images/I/51KtPqh3nkL.jpg',
          release: 'June 28, 2006.',
          code: 'dc2', 
        },
                {
          key: 'The Dark Knight	',
          name: 'The Dark Knight',
          director:'Christopher Nolan',
          cast:'Christian Bale, Michael Caine, Heath Ledger, Gary Oldman, Aaron Eckhart, Maggie Gyllenhaal, Morgan Freeman',
          synopsis: 'With the help of allies Lt. Jim Gordon (Gary Oldman) and DA Harvey Dent (Aaron Eckhart), Batman (Christian Bale) has been able to keep a tight lid on crime in Gotham City. But when a vile young criminal calling himself the Joker (Heath Ledger) suddenly throws the town into chaos, the caped Crusader begins to tread a fine line between heroism and vigilantism.',
          preview: 'https://is1-ssl.mzstatic.com/image/thumb/Music/db/24/b1/mzi.wevryeas.jpg/268x0w.jpg',  
          poster: 'https://images-na.ssl-images-amazon.com/images/I/81AJdOIEIhL._SY679_.jpg',
          release: 'July 18, 2008.',
          code: 'dc3', 
        },
                {
          key: 'Green Lantern',
          name: 'Green Lantern',
          director:'Martin Campbell',
          cast:'Ryan Reynolds, Blake Lively, Peter Sarsgaard, Mark Strong, Angela Bassett, Tim Robbins',
          synopsis: 'Sworn to preserve intergalactic order, the Green Lantern Corps has existed for centuries. Its newest recruit, Hal Jordan (Ryan Reynolds), is the first human to join the ranks. The Green Lanterns have little regard for humans, who have thus far been unable to harness the powers of the ring each member wears. But Jordan, a gifted and cocky test pilot, may be the corps\' only hope when a new enemy called Parallax threatens the universal balance of power.',
          preview: 'https://listeningincolor.files.wordpress.com/2011/05/green_lantern_movie_hal_jordan_ryan_reynolds.jpg',  
          poster: 'https://images-na.ssl-images-amazon.com/images/I/51voI5HiIrL.jpg',
          release: 'June 17, 2011.',
          code: 'dc4', 
        },

                {
          key: 'The Dark Knight Rises',
          name: 'The Dark Knight Rises',
          director:'Christopher Nolan',
          cast:'Christian Bale, Michael Caine, Gary Oldman, Anne Hathaway, Tom Hardy, Marion Cotillard, Joseph Gordon-Levitt, Morgan Freeman',
          synopsis: 'It has been eight years since Batman (Christian Bale), in collusion with Commissioner Gordon (Gary Oldman), vanished into the night. Assuming responsibility for the death of Harvey Dent, Batman sacrificed everything for what he and Gordon hoped would be the greater good. However, the arrival of a cunning cat burglar (Anne Hathaway) and a merciless terrorist named Bane (Tom Hardy) force Batman out of exile and into a battle he may not be able to win.',
          preview: 'https://is1-ssl.mzstatic.com/image/thumb/Music/v4/fb/4c/d7/fb4cd7c7-12d4-9b31-7acc-b9901b83598c/886443558595.jpg/268x0w.jpg',  
          poster: 'https://images-na.ssl-images-amazon.com/images/I/51k98elC6mL.jpg',
          release: 'July 20, 2012.',
          code: 'dc5', 
        },
        {
          key: 'Man of Steel',
          name: 'Man of Steel',
          director:'Zack Snyder',
          cast:'Henry Cavill, Amy Adams, Michael Shannon, Kevin Costner, Diane Lane, Laurence Fishburne, Antje Traue, Ayelet Zurer, Christopher Meloni, Russell Crowe',
          synopsis: 'With the imminent destruction of Krypton, their home planet, Jor-El (Russell Crowe) and his wife seek to preserve their race by sending their infant son to Earth. The child\'s spacecraft lands at the farm of Jonathan (Kevin Costner) and Martha (Diane Lane) Kent, who name him Clark and raise him as their own son. Though his extraordinary abilities have led to the adult Clark (Henry Cavill) living on the fringe of society, he finds he must become a hero to save those he loves from a dire threat.',
          preview: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxN7aLMi6LZHp27A0wE2RpWtxJjQVoU8sDmjrjCiaiKgWqGZ-b',  
          poster: 'https://i0.wp.com/comics-x-aminer.com/wp-content/uploads/2013/07/s114.jpg?resize=1076%2C1500',
          release: 'June 14, 2013.',
          code: 'dc6', 
        },
        {
          key: 'Batman v Superman: Dawn of Justice',
          name: 'Batman v Superman: Dawn of Justice',
          director:'Zack Snyder',
          cast:'Ben Affleck, Henry Cavill, Amy Adams, Jesse Eisenberg, Diane Lane, Laurence Fishburne, Jeremy Irons, Holly Hunter, Gal Gadot',
          synopsis: 'It\'s been nearly two years since Superman\'s (Henry Cavill) colossal battle with Zod (Michael Shannon) devastated the city of Metropolis. The loss of life and collateral damage left many feeling angry and helpless, including crime-fighting billionaire Bruce Wayne (Ben Affleck). Convinced that Superman is now a threat to humanity, Batman embarks on a personal vendetta to end his reign on Earth, while the conniving Lex Luthor (Jesse Eisenberg) launches his own crusade against the Man of Steel.',
          preview: 'http://fr.web.img2.acsta.net/c_300_300/pictures/16/02/03/11/17/130929.jpg',  
          poster: 'https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
          release: 'Mar 25, 2016.',
          code: 'dc7', 
        },
        {
          key: 'Suicide Squad',
          name: 'Suicide Squad',
          director:'David Ayer',
          cast:'Will Smith, Jared Leto, Margot Robbie, Joel Kinnaman, Viola Davis, Jai Courtney, Jay Hernandez, Adewale Akinnuoye-Agbaje, Ike Barinholtz, Scott Eastwood, Cara Delevingne',
          synopsis: 'Figuring they\'re all expendable, a U.S. intelligence officer decides to assemble a team of dangerous, incarcerated supervillains for a top-secret mission. Now armed with government weapons, Deadshot (Will Smith), Harley Quinn (Margot Robbie), Captain Boomerang, Killer Croc and other despicable inmates must learn to work together. Dubbed Task Force X, the criminals unite to battle a mysterious and powerful entity, while the diabolical Joker (Jared Leto) launches an evil agenda of his own.',
          preview: 'https://shop.r10s.jp/book/cabinet/6328/0889853626328.jpg',  
          poster: 'https://images-na.ssl-images-amazon.com/images/I/51xxybsKNLL.jpg',
          release: 'Aug 5, 2016.',
          code: 'dc8', 
        },
        {
          key: 'Wonder Woman',
          name: 'Wonder Woman',
          director:'Patty Jenkins',
          cast:'Gal Gadot, Chris Pine, Robin Wright, Connie Nielsen, David Thewlis, Danny Huston, Elena Anaya',
          synopsis: 'Before she was Wonder Woman (Gal Gadot), she was Diana, princess of the Amazons, trained to be an unconquerable warrior. Raised on a sheltered island paradise, Diana meets an American pilot (Chris Pine) who tells her about the massive conflict that\'s raging in the outside world. Convinced that she can stop the threat, Diana leaves her home for the first time. Fighting alongside men in a war to end all wars, she finally discovers her full powers and true destiny.',
          preview: 'https://source.superherostuff.com/wp-content/uploads/2016/11/wwfeatures.jpg',  
          poster: 'https://images-na.ssl-images-amazon.com/images/I/A1wxXiiMuYL._SY550_.jpg',
          release: 'June 2, 2017.',
          code: 'dc9', 
        },
        {
          key: 'Justice League',
          name: 'Justice League',
          director:'Zack Snyder',
          cast:'Ben Affleck, Henry Cavill, Amy Adams, Gal Gadot, Ezra Miller, Jason Momoa, Ray Fisher, Jeremy Irons, Diane Lane, Connie Nielsen, J. K. Simmons',
          synopsis: 'Fuelled by his restored faith in humanity, and inspired by Superman\'s selfless act, Bruce Wayne enlists newfound ally Diana Prince to face an even greater threat. Together, Batman and Wonder Woman work quickly to recruit a team to stand against this newly-awakened enemy. Despite the formation of an unprecedented league of heroes in Batman, Wonder Woman, Aquaman, Cyborg and the Flash, it may be too late to save the planet from an assault of catastrophic proportions.',
          preview: 'https://static.timesofisrael.com/www/uploads/2017/10/Justice-League-5.jpg',  
          poster: 'https://i.pinimg.com/originals/d5/88/87/d58887fcac9b94fb03c3f402c2656250.jpg',
          release: 'Nov 17, 201.7',
          code: 'dc10', 
        },
        {
          key: 'Aquaman',
          name: 'Aquaman',
          director:'James Wan',
          cast:'Jason Momoa, Amber Heard, Patrick Wilson, Nicole Kidman, Dolph Lundgren, and Willem Dafoe.',
          synopsiss: 'Aquaman finds himself caught between a surface world that ravages the sea and the underwater Atlanteans who are ready to revolt.',
          preview: 'https://cdn.cinematerial.com/p/500x/vyj9mzdy/aquaman-british-movie-poster.jpg',           poster: 'https://i0.wp.com/batman-news.com/wp-content/uploads/2018/07/Aquaman-Poster.jpg?resize=696%2C1031&quality=80&strip=info&ssl=1',
          release: 'Dec 21, 2018.',
          code: 'dc11',
        },
        {
          key: 'Shazam!',
          name: 'Shazam!',
          director:'David F. Sandberg',
          cast:'Zachary Levi, Asher Angel, Jack Dylan Grazer, Grace Fulton, Faithe Herman, Ian Chen, Jovan Armand, and Mark Strong.',
          synopsis: 'A magic word allows a boy to transform into an adult superhero.',
          preview: 'http://geeko.lesoir.be/wp-content/uploads/sites/58/2018/07/shazam___2019__fan_poster_by_camw1n-dcgzlqj-1.jpg',  
          poster: 'https://orig00.deviantart.net/d848/f/2018/093/4/b/shazam_poster_by_bryanzap-dc7sjdz.jpg',
          release: 'Apr 5, 2019.',
          code: 'dc12', 
        },
        {
          key: 'Wonder Woman 1984',
          name: 'Wonder Woman 1984',
          director:'Patty Jenkins',
          cast:'Gal Gadot, Chris Pine, Kristen Wiig, Pedro Pascal, Connie Nielsen, and Robin Wright',
          synopsis: 'Wonder Woman squares off against the Cheetah, a villainess who possesses superhuman strength and agility.',
          preview: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/DC_Comics_logo.svg/900px-DC_Comics_logo.svg.png',  
          poster: '',
          release: 'Nov 1, 2019.',
          code: 'dc13', 
        },
        {
          key: 'Cyborg',
          name: 'Cyborg',
          director:'To be announced',
          cast:'Ray Fisher',
          synopsis: '',
          preview: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/DC_Comics_logo.svg/900px-DC_Comics_logo.svg.png',  
          poster: '',
          release: 'Apr 3, 2020.',
          code: 'dc14', 
        },
        {
          key: 'Green Lantern Corps',
          name: 'Green Lantern Corps',
          director:'To be announced',
          cast:'',
          synopsis: '',
          preview: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/DC_Comics_logo.svg/900px-DC_Comics_logo.svg.png',  
          poster: '',
          release: 'July 24, 2020.',
          code: 'dc15', 
        },
        {
          key: 'The Flash',
          name: 'The Flash - Flashpoint',
          director:'John Francis Daley & Jonathan Goldstein',
          cast:'Ezra Miller, Kiersey Clemons, and Billy Crudup',
          synopsis: 'The super-fast hero the Flash travels into a timeline where Earth is in turmoil and its heroes are lost and scattered. It is up to him to make things right.',
          preview: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/DC_Comics_logo.svg/900px-DC_Comics_logo.svg.png',  
          poster: '',
          release: 'To be announced',
          code: 'dc16', 
        },
        {
          key: 'Birds of Prey',
          name: 'Birds of Prey',
          director:'Cathy Yan',
          cast:'Margot Robbie',
          synopsis: 'N/A',
          preview: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/DC_Comics_logo.svg/900px-DC_Comics_logo.svg.png',  
          poster: '',
          release: 'To be announced',
          code: 'dc17', 
        },
        {
          key: 'The Batman',
          name: 'The Batman',
          director:'Matt Reeves',
          cast:'Ben Affleck (?)',
          synopsis: 'N/A',
          preview: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/DC_Comics_logo.svg/900px-DC_Comics_logo.svg.png',  
          poster: '',
          release: 'To be announced',
          code: 'dc18', 
        },
        {
          key: 'Black Adam',
          name: 'Black Adam',
          director:'To be announced',
          cast:'Dwayne Johnson ',
          synopsis: 'N/A',
          preview: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/DC_Comics_logo.svg/900px-DC_Comics_logo.svg.png',  
          poster: '',
          release: 'To be announced',
          code: 'dc19', 
        },
        {
          key: 'Joker Origin Story',
          name: 'Joker Origin Story',
          director:'Todd Phillips',
          cast:'Joaquin Phoenix, Zazie Beets, Robert De Niro',
          synopsis: 'N/A',
          preview: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/DC_Comics_logo.svg/900px-DC_Comics_logo.svg.png',  
          poster: '',
          release: 'To be announced',
          code: 'dc20', 
        },
        {
          key: 'Suicide Squad 2',
          name: 'Suicide Squad 2',
          director:'Gavin O’Connor',
          cast:'To be announced',
          synopsis: 'N/A',
          preview: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/DC_Comics_logo.svg/900px-DC_Comics_logo.svg.png',  
          poster: '',
          release: 'To be announced',
          code: 'dc21', 
        },
        {
          key: 'Batgirl',
          name: 'Batgirl',
          director:'To be announced',
          cast:'To be announced',
          synopsis: 'N/A',
          preview: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/DC_Comics_logo.svg/900px-DC_Comics_logo.svg.png',  
          poster: '',
          release: 'To be announced',
          code: 'dc22', 
        },
        {
          key: 'New Gods',
          name: 'New Gods',
          director:'Ava DuVernay',
          cast:'To be announced',
          synopsis: 'N/A',
          preview: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/DC_Comics_logo.svg/900px-DC_Comics_logo.svg.png',  
          poster: '',
          release: 'To be announced',
          code: 'dc23', 
        },
        {
          key: 'Blackhawk',
          name: 'Blackhawk',
          director:'Steven Spielberg (?)',
          cast:'To be announced',
          synopsis: 'N/A',
          preview: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/DC_Comics_logo.svg/900px-DC_Comics_logo.svg.png',  
          poster: '',
          release: 'To be announced',
          code: 'dc24', 
        },
        {
          key: 'Untitled Joker/Harley Quinn Movie',
          name: 'Untitled Joker/Harley Quinn Movie',
          director:'John Requa and Glenn Ficarra',
          cast:'Margot Robbie and Jared Leto',
          synopsis: 'N/A',
          preview: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/DC_Comics_logo.svg/900px-DC_Comics_logo.svg.png',  
          poster: '',
          release: 'To be announced',
          code: 'dc25', 
        },
        {
          key: 'Supergirl',
          name: 'Supergirl',
          director:'To be announced',
          cast:'To be announced',
          synopsis: 'N/A',
          preview: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/DC_Comics_logo.svg/900px-DC_Comics_logo.svg.png',  
          poster: '',
          release: 'To be announced',
          code: 'dc26', 
        },
        {
          key: 'Nightwing',
          name: 'Nightwing',
          director:'Chris McKay',
          cast:'To be announced',
          synopsis: 'N/A',
          preview: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/DC_Comics_logo.svg/900px-DC_Comics_logo.svg.png',  
          poster: '',
          release: 'To be announced',
          code: 'dc27', 
        },
        {
          key: 'Justice League Dark',
          name: 'Justice League Dark',
          director:'To be announced',
          cast:'To be announced',
          synopsis: 'N/A',
          preview: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/DC_Comics_logo.svg/900px-DC_Comics_logo.svg.png',  
          poster: '',
          release: 'To be announced',
          code: 'dc28', 
        },
        {
          key: 'Gotham City Sirens',
          name: 'Gotham City Sirens',
          director:'David Ayer (?)',
          cast:'Margot Robbie',
          synopsis: 'N/A',
          preview: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/DC_Comics_logo.svg/900px-DC_Comics_logo.svg.png',  
          poster: '',
          release: 'To be announced',
          code: 'dc29', 
        },
        {
          key: 'Untitled Man of Steel Sequel',
          name: 'Untitled Man of Steel Sequel',
          director:'To be announced',
          cast:'Henry Cavill',
          synopsis: 'N/A',
          preview: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/DC_Comics_logo.svg/900px-DC_Comics_logo.svg.png',  
          poster: '',
          release: 'To be announced',
          code: 'dc30', 
        },
        {
          key: 'Untitled Deathstroke Movie',
          name: 'Untitled Deathstroke Movie',
          director:'Gareth Evans',
          cast:'Joe Manganiello',
          synopsis: 'N/A',
          preview: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/DC_Comics_logo.svg/900px-DC_Comics_logo.svg.png',  
          poster: '',
          release: 'To be announced',
          code: 'dc31', 
        },
      ];
      
      var dcs_keys = {};

      for (var i=0;i<dcs_list.length;i++){
        dcs_keys[dcs_list[i].key] = dcs_list[i];
      }

    return {
        list: dcs_list,
        keys: dcs_keys
    };

}]);