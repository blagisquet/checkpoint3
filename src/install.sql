CREATE DATABASE wildcircus;

USE wildcircus;

CREATE TABLE spectacles (
  id_spec INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  city VARCHAR(180),
  address VARCHAR(255),
  date DATE,
  price FLOAT,
  image VARCHAR(255)
);

CREATE TABLE artists (
  id_artist INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name VARCHAR(180),
  work VARCHAR(180),
  image VARCHAR(255),
  description TEXT
);

CREATE TABLE messages (
  id_messages INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name VARCHAR(180),
  email VARCHAR(180),
  message TEXT
);

INSERT INTO artists (name, work, image, description)
VALUES
('Cécile', 'Wild Circus CEO', 'https://image.noelshack.com/fichiers/2019/29/2/1563286285-cecile.png
', 'Cécile is the CEO of the Wild Circus, you need to be serious and say hello if you see her in the circus. Dont forget to say that we did an amazing job... PLEAAAAAASE.'),
('Simon', 'Dresseur de fauves', 'https://image.noelshack.com/fichiers/2019/29/2/1563286291-simon.png
', 'Simon is the Dresseur of the Fauves and especially JavaScript Fauves... You cant know but its an horrible job, what a life...'),
('François', 'Dresseur de fauves', 'https://image.noelshack.com/fichiers/2019/29/2/1563286288-francois.png
', 'Francois is the Dresseur of the PHP Fauves, if you hear people screaming all around, dont panic its just PHP Fauves. I said that they are no animals in this circus but I dont know how to call them.'),
('Jean-Willy', 'Trapéziste bléssé', 'https://image.noelshack.com/fichiers/2019/29/2/1563286281-willy.png
', 'Jean-Willy was our Trapéziste but he is always hurt so if you see him sitting next to you be careful and please dont give him something to eat or bretzels at maximum.'),
('Tristan', 'Clown', 'https://image.noelshack.com/fichiers/2019/29/2/1563286279-tristan.png', 'Tristan is the funniest of the whole circus, but look at what youre saying it could be fast before he makes a joke about you. You cant beat him at this game.'),
('Aurélia', 'Femme à barbe', 'https://image.noelshack.com/fichiers/2019/29/2/1563286283-aurelia.png
', 'Aurélia is the Femme à barbe, what can I say... Its just a girl with a beard, thats all.');

INSERT INTO messages (name, email, message)
VALUES
('Jean-Michel Amoitié', 'jeanmi@gm.co', 'I really liked this show especially when'),
('Jean-Willy', 'williamtassy11@gmail.com', 'So sad I cant be here, this circus is so amazing');