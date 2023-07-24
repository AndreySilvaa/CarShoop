// IMAGENS
import audir8 from '../assets/audi-r8.jpg'
import audiq5 from '../assets/Audi_Q5.jpg'
import audia6 from '../assets/Audi_A6.jpg'
import audietron from '../assets/Audi_e-tron.jpg'

import bmwm850 from '../assets/bmw_m850i.jpg'
import bmwx6 from '../assets/BMW_X6.jpg'

import mercedesC300 from '../assets/Mercedes-Benz_C300.jpg'
import mercedesGLC63 from '../assets/Mercedes-GLC_63.jpg'
import mercedesS560 from '../assets/Mercedes-S-560.jpg'

import jaguarXE from '../assets/Jaguar_XE.jpg'

import fordMustang from '../assets/Ford_Mustang.jpg'
import fordF150 from '../assets/Ford_F-150_Raptor.jpg'

// MARCAS: audi(4) - BMW(2) - mercedes(3) - jaguar(1) - ford(2)

export const cars = [
    {
        name: 'AUDI R8 - 5.2 FSI QUATTRO V10 40V GASOLINA 2P S TRONIC',
        year: 2014,
        fuel: 'gasolina',
        seats: 2,
        km: 8590,
        march: 'automática',
        color: 'cinza',
        price: 849900,
        image: audir8,
        brand: 'Audi',
        id: 1
    },
    {
        name: 'AUDI Q5 - 2.0 45 TFSI GASOLINA SPORTBACK S LINE BLACK QUATTRO S TRONIC',
        year: 2021,
        fuel: 'gasolina',
        seats: 5,
        km: 25300,
        march: 'automática',
        color: 'branco',
        price: 349990,
        image: audiq5,
        brand: 'Audi',
        id: 2,
    },
    {
        name: 'AUDI A6 - 2.0 TFSI AMBIENTE GASOLINA 4P S-TRONIC',
        year: 2018,
        fuel: 'gasolina',
        seats: 5,
        km: 68600,
        march: 'automática',
        color: 'preto',
        price: 199900,
        image: audia6,
        brand: 'Audi',
        id: 3,
    },
    {
        name: 'AUDI RS E-TRON GT - ELÉTRICO QUATTRO',
        year: 2022,
        fuel: 'elétrico',
        seats: 4,
        km: 7000,
        march: 'automática',
        color: 'azul',
        price: 899900,
        image: audietron,
        brand: 'Audi',
        id: 4,
    },
    {
        name: 'BMW M 850i - 4.4 V8 TWINPOWER GASOLINA XDRIVE STEPTRONIC',
        year: 2019,
        fuel: 'gasolina',
        seats: 4,
        km: 6000,
        march: 'automática',
        color: 'branco',
        price: 699900,
        image: bmwm850,
        brand: 'BMW',
        id: 5,
    },
    {
        name: 'BMW X6 - 3.0 TWINPOWER GASOLINA XDRIVE35I M SPORT AUTOMÁTICO',
        year: 2018,
        fuel: 'gasolina',
        seats: 5,
        km: 43000,
        march: 'automática',
        color: 'branco',
        price: 369000,
        image: bmwx6,
        brand: 'BMW',
        id: 6,
    },
    {
        name: 'MERCEDES-BENZ C 300 - 2.0 CGI GASOLINA SPORT 9G-TRONIC',
        year: 2020,
        fuel: 'gasolina',
        seats: 5,
        km: 16000,
        march: 'automática',
        color: 'cinza',
        price: 284000,
        image: mercedesC300,
        brand: 'Mercedes',
        id: 7,
    },
    {
        name: 'MERCEDES-BENZ GLC 63 AMG - 4.0 V8 TURBO GASOLINA 4MATIC+ SPEEDSHIFT',
        year: 2019,
        fuel: 'gasolina',
        seats: 5,
        km: 20000,
        march: 'automática',
        color: 'preta',
        price: 695000,
        image: mercedesGLC63,
        brand: 'Mercedes',
        id: 8,
    },
    {
        name: 'MERCEDES-BENZ S 560 - 4.0 V8 TURBO GASOLINA L 9G-TRONIC',
        year: 2018,
        fuel: 'gasolina',
        seats: 4,
        km: 20000,
        march: 'automática',
        color: 'preta',
        price: 970000,
        image: mercedesS560,
        brand: 'Mercedes',
        id: 9,
    },
    {
        name: 'JAGUAR XE - 2.0 16V INGENIUM P250 GASOLINA R-SPORT 4P AUTOMÁTICO',
        year: 2018,
        fuel: 'gasolina',
        seats: 5,
        km: 75000,
        march: 'automática',
        color: 'branco',
        price: 179000,
        image: jaguarXE,
        brand: 'Jaguar',
        id: 10,
    },
    {
        name: 'FORD MUSTANG - 5.0 V8 TI-VCT GASOLINA GT PREMIUM SELECTSHIFT',
        year: 2017,
        fuel: 'gasolina',
        seats: 4,
        km: 23000,
        march: 'automática',
        color: 'vermelho',
        price: 349000,
        image: fordMustang,
        brand: 'Ford',
        id: 11,
    },
    {
        name: 'FORD F-150 - 3.5 V6 ECOBOOST GASOLINA RAPTOR CD 4WD SELECTSHIFT',
        year: 2022,
        fuel: 'gasolina',
        seats: 6,
        km: 3000,
        march: 'automática',
        color: 'vermelho',
        price: 1369000,
        image: fordF150,
        brand: 'Ford',
        id: 12,
    },
]