USE dinnerparty;

INSERT INTO event (event_name, date, seats)
VALUES ('event 1', '2020-3-19', 10);

INSERT INTO user (username, password)
VALUES ('Tad', 'testing1');

INSERT INTO rsvp (rsvp_seats)
VALUES (10);

INSERT INTO menu (app, app_description, entree, entree_description, dessert, dessert_description)
VALUES ('salad', 'good stuff', 'turkey sandwich', 'better stuff', 'cheesecake', 'best stuff');

SELECT * FROM event;

SELECT * FROM user;

SELECT * FROM rsvp;

SELECT * FROM menu;