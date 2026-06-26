export const filterArr = (array, filterBy, condition, value) => {

    if (!Array.isArray(array)) {
        throw new TypeError("First arg must be an array");
    }

    if (
        filterBy === undefined ||
        value === undefined ||
        condition === undefined
    ) {
        return array;
    }

    const validCondition = [
        'eq',
        'neq',
        'gt',
        'lt',
        'gte',
        'lte'
    ];

    if (!validCondition.includes(condition)) {
        throw new Error('Invalid condition');
    }

    return array.filter(item => {

        let currentItem = item[filterBy];

        let valueToCompare = value;

        if (typeof currentItem === 'string') {
            currentItem = currentItem.toLowerCase();
        }

        if (typeof valueToCompare === 'string') {
            valueToCompare = valueToCompare.toLowerCase();
        }

        if (
            !isNaN(currentItem) &&
            !isNaN(valueToCompare)
        ) {
            currentItem = Number(currentItem);
            valueToCompare = Number(valueToCompare);
        }

        switch (condition) {

            case 'eq':
                return currentItem === valueToCompare;

            case 'neq':
                return currentItem !== valueToCompare;

            case 'gt':
                return currentItem > valueToCompare;

            case 'lt':
                return currentItem < valueToCompare;

            case 'gte':
                return currentItem >= valueToCompare;

            case 'lte':
                return currentItem <= valueToCompare;

            default:
                return false;
        }
    });
};