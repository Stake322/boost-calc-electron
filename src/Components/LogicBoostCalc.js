


export const LogicBoostCalc = (from, to) => {

    let MMR1 = (Number(localStorage.getItem('MMR1')) / 100) || 0.2
    let MMR2 = (Number(localStorage.getItem('MMR2')) / 100) || 0.2
    let MMR3 = (Number(localStorage.getItem('MMR3')) / 100) || 0.2
    let MMR4 = (Number(localStorage.getItem('MMR4')) / 100) || 0.2
    let MMR5 = (Number(localStorage.getItem('MMR5')) / 100) || 0.2
    let MMR6 = (Number(localStorage.getItem('MMR6')) / 100) || 0.2
    let MMR7 = (Number(localStorage.getItem('MMR7')) / 100) || 0.2
    let MMR8 = (Number(localStorage.getItem('MMR8')) / 100) || 0.2
    let MMR9 = (Number(localStorage.getItem('MMR9')) / 100) || 0.2
    let MMR10 = (Number(localStorage.getItem('MMR10')) / 100) || 0.2
    
    var result = 0;
    var value = from;
    const getPrice = (mmr) => {
        if (mmr < 2000) { return MMR1 } else
            if (mmr < 3000) { return MMR2 } else
                if (mmr < 3500) { return MMR3 } else
                    if (mmr < 4000) { return MMR4 } else
                        if (mmr < 4500) { return MMR5 } else
                            if (mmr < 5000) { return MMR6 } else
                                if (mmr < 5500) { return MMR7 } else
                                    if (mmr < 6000) { return MMR8 } else
                                        if (mmr < 6500) { return MMR9 } else
                                            if (mmr < 7000) { return MMR10 } else
                                                if (mmr <= 7500) { return MMR10 }
    }
    if (to > from) {
        while (value !== to) {
            result += getPrice(value);
            value++;
        }
    }


    return result;
};
