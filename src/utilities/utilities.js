class Utilities {
    static isGroup(from){
        return from.length > 20;
    }

    static timesTampSP(){
        const dateNow = new Date();
        const fusoHorarioSP = 'America/Sao_Paulo';
        const dthSP = dateNow.toLocaleString('en-US', { timeZone: fusoHorarioSP });
        const timestampSP = new Date(dthSP).getTime();
        return timestampSP/1000;
    }

}


module.exports = Utilities;