const pandemicStartMap = "XX0X10010X000X010X010X00";
let pandemicStartMapArr = [];
let pandemicCutMapArr = [];
let pandemicEndMapArr = [];
let pandemicEndMap;
let areaCount = 0;
let infectedCount = 0;
let startArea = document.querySelector('.start-area');
let endArea = document.querySelector('.end-area');

if (pandemicStartMap.length < 8) {
    document.querySelector('.quarantine-world').style.width = '600px';
} else {
    document.querySelector('.quarantine-world').style.width = pandemicStartMap.length * 72 + 80 + 'px';
}

pandemicStartMapArr = pandemicStartMap.split("");
pandemicStartMapArr.forEach(function (item, i) {
    let currentId = i + 1;
    let newBlock = document.createElement('li');
    newBlock.id = 'area-start-' + currentId;
    startArea.append(newBlock);
    if (item == 1) {
        document.getElementById('area-start-' + currentId).classList.add('infected');
    } else if (item == 0) {
        document.getElementById('area-start-' + currentId).classList.add('healthy');
    } else {
        document.getElementById('area-start-' + currentId).classList.add('ocean');
    }
});

pandemicCutMapArr = pandemicStartMap.split("X");
pandemicEndMapArr = pandemicCutMapArr.map(function (item) {
    if (+item === 0) {
        return item;
    } else {
        item = '1'.repeat(item.length);
        return item;
    }
});

pandemicEndMap = pandemicEndMapArr.join("X");

pandemicEndMapArr = pandemicEndMap.split("");
pandemicEndMapArr.forEach(function (item, i) {
    let endId = i + 1;
    let newBlock = document.createElement('li');
    newBlock.id = 'area-end-' + endId;
    endArea.append(newBlock);
    if (item == 1) {
        document.getElementById('area-end-' + endId).classList.add('infected');
        areaCount++;
        infectedCount++;
    } else if (item == 0) {
        document.getElementById('area-end-' + endId).classList.add('healthy');
        areaCount++;
    } else {
        document.getElementById('area-end-' + endId).classList.add('ocean');
    }
});

document.querySelector('.total-count').textContent = areaCount;
document.querySelector('.infected-count').textContent = infectedCount;
document.querySelector('.infected-percentage').textContent = infectedCount / areaCount * 100 || 0;