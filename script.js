const pandemicStartMap = "XX0X1000X10X1X0XXXXXX";
let pandemicCutMapArr = [];
let pandemicEndMapArr = [];
let pandemicEndMap;
let areaCount;
let infectedCount;
let startArea = document.querySelector('.start-area');
let endArea = document.querySelector('.end-area');
let startBlockLink = 'area-start-';
let endBlockLink = 'area-end-';

renderMap(pandemicStartMap, startBlockLink, startArea);

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

renderMap(pandemicEndMap, endBlockLink, endArea);

document.querySelector('.total-count').textContent = areaCount;
document.querySelector('.infected-count').textContent = infectedCount;
document.querySelector('.infected-percentage').textContent = infectedCount / areaCount * 100 || 0;

function renderMap(pandemicMap, blockLink, mapContainer) {
    let areaFuncCount = 0;
    let infectedFuncCount = 0;
    let pandemicMapArr = pandemicMap.split('');
    pandemicMapArr.forEach(function (item, i) {
        let endId = i + 1;
        let newBlock = document.createElement('li');
        newBlock.id = blockLink + endId;
        mapContainer.append(newBlock);
        if (item == 1) {
            document.getElementById(blockLink + endId).classList.add('infected');
            areaFuncCount++;
            infectedFuncCount++;
        } else if (item == 0) {
            document.getElementById(blockLink + endId).classList.add('healthy');
            areaFuncCount++;
        } else {
            document.getElementById(blockLink + endId).classList.add('ocean');
        }
    });
    areaCount = areaFuncCount;
    infectedCount = infectedFuncCount;
}