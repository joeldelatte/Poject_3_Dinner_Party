USE dinnerparty;

INSERT INTO events (event_name, event_date, event_seats, event_address, event_city, event_state, event_zip, app, app_description, entree, entree_description, dessert, dessert_description, user_id)
VALUES ('event 1', '2020-3-19', 10, '3200 Duval Rd', 'Austin', 'TX', 78759, 'salad', 'good stuff', 'turkey sandwich', 'better stuff', 'cheesecake', 'best stuff', 1);

INSERT INTO users (username, password)
VALUES ('Tad', 'testing1');

INSERT INTO signups (username_id, event_id, rsvp_seats)
VALUES (1, 1, 2);

SELECT * FROM event;

SELECT * FROM user;

SELECT * FROM rsvp;