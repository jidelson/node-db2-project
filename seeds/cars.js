exports.seed = function(knex, Promise){
    return knex('cars').truncate()
    .then(function () {
        return knex('cars').insert([
            { 
                VIN: '1GT125E87DF209121',
                make: 'Ford',
                model: 'Explorer',
                mileage: '122,345',
                transmission: 'automatic',
                titleStatus: 'clean'
            },
            { 
                VIN: '5KBCP3F89AB011848',
                make: 'Chevrolet',
                model: 'Malibu',
                mileage: '100,604',
                transmission: 'manual',
                titleStatus: 'salvage'
            }
        ])
    })
}