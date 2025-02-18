---
title: Сигналната верига
description: Научете какво е сигналната верига – първата голяма надстройка на Eth2 на Етереум.
lang: bg
template: upgrade
image: ../../../../../assets/upgrades/core.png
summaryPoint1: Сигналната верига не променя нищо за Етереум, който използваме днес.
summaryPoint2: Тя ще координира мрежата.
summaryPoint3: Тя въвежда доказателство-за-залог в екосистемата на Етереум.
summaryPoint4: Това може да ви познато като „Фаза 0“ в техническите пътни карти.
---

<UpgradeStatus isShipped dateKey="page-upgrades-beacon-date">
    Сигналната верига беше пусната на 1 декември 2020 г. по обяд, UTC. За да научите повече, <a href="https://beaconscan.com/">вижте данните</a>. Ако желаете да помогнете при валидирането на веригата, може да <a href="/staking/">заложите своя ETH</a>.
</UpgradeStatus>

## Какво прави Сигналната верига? {#what-does-the-beacon-chain-do}

Сигналната верига ще ръководи или координира разширената мрежа на [фрагменти](/upgrades/sharding/) и [залагащи](/staking/). Но това няма да бъде същото като [основната мрежа на Етереум](/glossary/#mainnet) към днешна дата. Тя не може да се справя с акаунтите и умните договори.

Ролята на Сигналната верига ще се променя с времето, но тя е основна част на [сигурния, устойчив и разширяващ се Етереум, върху който работим](/upgrades/vision/).

## Характеристики на Сигналната верига {#beacon-chain-features}

### Какво представляват залаганията {#introducing-staking}

Сигналната верига ще включи [доказателство-за-залог](/developers/docs/consensus-mechanisms/pos/) в Етереум. Това е един нов начин за вас да помогнете за запазване сигурността на Етереум. Представете си го като обществено благо, което ще направи Етереум по-здрав и в същото време ще ви донесе повече ETH. На практика това ще ви накара да заложите ETH, за да активирате валидаторския софтуер. Като валидатор вие ще задействате трансакциите и ще създадете нови блокове във веригата.

Депозирането на залог и това да станеш валидатор е по-лесно от [копаенето](/developers/docs/mining/) (както мрежата се осигурява в момента). И се предполага, че това ще помогне Етереум да стане по-сигурен и за в бъдеще. Колкото повече хора участват в мрежата, толкова по-децентрализирана и защитена от атаки ще бъде тя.

<InfoBanner emoji=":money_bag:">
Ако се интересувате как да станете валидатор и да помогнете в осигуряването на Сигналната верига, <a href="/staking/">научете повече за залагането</a>.
</InfoBanner>

Това е и важна промяна за друга надстройка на Eth2: [вериги от компоненти](/upgrades/sharding/).

### Настройки за веригите от компоненти {#setting-up-for-shard-chains}

След като Основната мрежа се слее със Сигналната верига, следващата надстройка ще въведе веригите от компоненти към мрежата на доказателство-за-залог. Тези „компоненти“ ще увеличат капацетита на мрежата и ще подобрят скоростта на трансакциите чрез разширяването на мрежата до 64 блока във веригата. Сигналната верига е важна първа стъпка при въвеждането на веригите от компоненти, защото те изискват залагане, за да работят сигурно.

Накрая Сигналната верига ще има и задачата да избере залагащите на случаен принцип, за да валидират веригите от компоненти. Това е от ключово значение за възпрепятстване на залагащите тайно да се наговорят и да изземат някой компонент. Е, това означава, че те имат [шанс, по-малък от 1 към 1 милиард](https://medium.com/@chihchengliang/minimum-committee-size-explained-67047111fa20).

## Връзки между надстройките {#relationship-between-upgrades}

Всички надстройки на Eth2 са взаимосвързани по определен начин. Така че нека обобщим как Сигналната верига влияе върху другите надстройки.

### Главната мрежа и Сигналната верига {#mainnet-and-beacon-chain}

Първоначално Сигналната верига ще съществува отделно от главната мрежа на Етереум, която използваме днес. Впоследствие обаче те ще бъдат свързани. Планът е Главната мрежа да се интегрира в системата на доказателство-за-залог, която се управлява и координира от Сигналната верига.

<ButtonLink to="/upgrades/merge/">Сливането</ButtonLink>

### Компонентите и Сигналната верига {#shards-and-beacon-chain}

Веригите от компоненти могат безопасно да влязат в екосистемата на Етереум само чрез съществуващ механизъм на консесус при доказателство-за-залог. Сигналната верига ще активира залагането и така ще проправи пътя за следващата надстройка на веригата от компоненти.

<ButtonLink to="/upgrades/sharding/">Вериги от компоненти</ButtonLink>

<Divider />

## Взаимодействие със Сигналната верига {#interact-with-beacon-chain}

<BeaconChainActions />
