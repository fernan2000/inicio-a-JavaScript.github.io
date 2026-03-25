//estructura de arbol corregida
let tree = {
    root: {
        data: 5,
        left: {
            data: 4,
            left: {
                data: 3,
                left: {},
                right: {}
            },
            right: {}
        },
        right: {
            data: 6,
            left: {},
            right: {
                data: 7,
                left: {},
                right: {}
            }
        }
    }
};

// Funcion de busqueda binaria corregida
function binarySearch(tree, value) {
    // si el nodo es null o undefined, el valor no se encontró
    if (!tree || !tree.data && tree.data !== 0) {
        return false;
    }
    
    if (tree.data === value) {
        return true;
    }
    
    if (value < tree.data) {
        return binarySearch(tree.left, value);
    } else {
        return binarySearch(tree.right, value);
    }
}

let result = binarySearch(tree.root, 6);
console.log(result); //true