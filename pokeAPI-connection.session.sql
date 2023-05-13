INSERT INTO tipo (nombre, img) VALUES (
    'Hada',
    'https://images.wikidexcdn.net/mwuploads/wikidex/9/94/latest/20230109223445/Tipo_hada_EpEc.png'
);

SELECT * FROM tipo;

INSERT INTO Pokemon (nombre, descripcion, tipo1, tipo2, evolucion, altura, peso, img) VALUES (
    'Arbok',
    'Se han llegado a identificar hasta seis variaciones distintas de los espeluznantes dibujos de su piel.',
    8,
    NULL,
    NULL,
    3.5,
    65.0,
    'https://archives.bulbagarden.net/media/upload/0/00/Spr_5b2_024.png'
);

SELECT * FROM pokemon;