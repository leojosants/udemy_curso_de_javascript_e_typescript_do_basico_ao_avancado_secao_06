(() => {
    /**
     * spread
     */

    function example01() {

        const product = {
            name: 'nome',
            price: 0.0,
        };

        const shorts = { ...product };
        shorts.name = 'Bermuda';
        shorts.price = 2.5;

        console.log(shorts);
        console.log(product);

        example01();
    }

    function example02() {

        const product = {
            name: 'nome',
            price: 0.0,
        };

        const mug = {
            ...product,
            material: 'porcelana',
        };

        mug.name = 'Caneca';
        mug.price = 2.5;

        console.log(mug);
        console.log(product);

        example02();
    }
})();

(() => {
    /**
     * Object.assign()
     */

    function example01() {

        const product = {
            name: 'nome',
            price: 0.0,
        };

        const mug = Object.assign({}, product, { material: 'porcelana' });

        mug.name = 'Caneca';
        mug.price = 2.5;

        console.log(mug);
        console.log(product);

        example01();
    }

    function example02() {

        const product = {
            name: 'nome',
            price: 0.0,
        };

        const mug = Object.assign({}, product, { material: 'porcelana' });

        mug.name = 'Caneca';
        mug.price = 2.5;

        console.log(mug);
        console.log(product);

        example02();
    }

    function example03() {

        const product = {
            name: 'nome',
            price: 0.0,
        };

        const mug = {
            name: product.name,
            price: product.price,
        };

        mug.name = 'Caneca';
        mug.price = 2.5;

        console.log(mug);
        console.log(product);

        example03();
    }
})();

(() => {
    /**
     * Object.keys()
     */

    function example01() { 
        const product = {
            name: 'nome',
            price: 0.0,
        };

        const mug = {
            name: product.name,
            price: product.price,
        };

        console.log(Object.keys(mug));
        example01();
    }
})();

(() => {
    /**
     * Object.freeze()
     */

    function example01() { 
        const product = {
            name: 'nome',
            price: 0.0,
        };
        
        const mug = {
            name: product.name,
            price: product.price,
        };
        console.log(mug);
        
        Object.freeze(mug);
        mug.name = 'teste';

        console.log(mug);
        example01();
    }
})();

(() => {
    /**
     * Object.getOwnPropertyDescriptor()
     */

    function example01() { 
        const product = {
            name: 'nome',
            price: 0.0,
        };
        
        const mug = {
            name: product.name,
            price: product.price,
        };

        mug.name = 'Caneca';
        mug.price = 1.8;

        console.log(Object.getOwnPropertyDescriptor(mug, 'name'));

        example01();
    }
})();

(() => {
    /**
     * Object.values()
     */

    function example01() { 
        const product = {
            name: 'nome',
            price: 0.0,
        };
        
        const mug = {
            name: product.name,
            price: product.price,
        };

        mug.name = 'Caneca';
        mug.price = 1.8;

        console.log(Object.values(mug));

        example01();
    }
})();

(() => {
    /**
     * Object.entries()
     */

    function example01() { 
        const product = {
            name: 'nome',
            price: 0.0,
        };
        
        const mug = {
            name: product.name,
            price: product.price,
        };

        mug.name = 'Caneca';
        mug.price = 1.8;

        for (let entry of Object.entries(mug)) {
            console.log(entry);   
        }

    }
    example01();
})();