INSERT INTO tipo (nombre, img) VALUES (
    'Hada',
    'https://images.wikidexcdn.net/mwuploads/wikidex/9/94/latest/20230109223445/Tipo_hada_EpEc.png'
);

SELECT * FROM tipo;

INSERT INTO Pokemon (nombre, descripcion, tipo1, tipo2, evolucion, altura, peso, img) VALUES (
    'Golduck',
    'Cuando nada a toda velocidad usando sus largas extremidades palmeadas, su frente comienza a brillar.',
    3,
    null,
    null,
    1.7,
    76.6,
    'https://archives.bulbagarden.net/media/upload/9/97/Spr_5b_055.png'
);

SELECT * FROM pokemon;

UPDATE pokemon set id = 54 where id = 55;
delete FROM pokemon where id = 53;
SELECT pg_get_serial_sequence('Pokemon', 'id');
SELECT setval('pokemon_id_seq', 54);