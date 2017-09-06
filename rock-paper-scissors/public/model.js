"use strict";

const rpsContainer = getModuleContainer(this, (typeof module !== "undefined") ? module : null);

rpsContainer[getModuleKey(this, rpsContainer)] = rockPaperScissors;

function getModuleContainer(context, container){
    if (context.hasOwnProperty("Window") && context instanceof context["Window"]){
        return context;
    } else if (container){
        return container;
    }
    return false;
}

function getModuleKey(context, container){
    if (context.hasOwnProperty("Window") && context instanceof (context["Window"])){
        return "rockPaperScissors";
    } else if (container.hasOwnProperty("exports")){
        return "exports";
    }
    return false;
}

function rockPaperScissors(){
    
}
