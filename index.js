const books = require("./books");

const processParameters = (argsByTerminal) => {
    const args = {
        param1: "", 
        param2: "", 
    };

    argsByTerminal[2] && (args.param1 = argsByTerminal[2].slice(2));
    argsByTerminal[3] && (args.param2 = argsByTerminal[3])
    //procesar argumentos y devolverlos en un objeto 

    return args;
};

const actionsDelegated = (action) => {
const {
    getAll,
    getById,
    getByAuthor,
    getByTag,
    getByName,
} = require("./books"); 

const selectedAction = action.param1;
const data = action.param2;

let result;
switch (selectedAction) {
    case "":
        result = getAll();
        break;
    case "get":
        result = getById(data);
        break;
    case "author":
        result = books.getByAuthor(data);
        break;
    case "name":
        result = books.getByName(data);
        break;
    case "tag":
        result = books.getByTag(data);
        break;
    case "delete":
        result = deleteByID(data);
    default:
        result = "Ingrese un dato correcto";
        break;
    }

    return result;
};

const main = () => {  
   const args = processParameters(process.argv);
   const resultData = actionsDelegated(args);

   console.log(resultData);
};

main();
