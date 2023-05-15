INSERT INTO tipo (nombre, img) VALUES (
    'Hada',
    'https://images.wikidexcdn.net/mwuploads/wikidex/9/94/latest/20230109223445/Tipo_hada_EpEc.png'
);

SELECT * FROM tipo;

INSERT INTO Pokemon (nombre, descripcion, tipo1, tipo2, evolucion, altura, peso, img) VALUES (
    'Mew',
    'Si se observa a través de un microscopio, puede distinguirse cuán corto, fino y delicado es el pelaje de este Pokémon.',
    11,
    null,
    null,
    0.4,
    4.0,
    'https://archives.bulbagarden.net/media/upload/4/43/Spr_5b_151.png'
);

SELECT * FROM pokemon;

UPDATE pokemon 
SET evolucion = null
WHERE id = 82;