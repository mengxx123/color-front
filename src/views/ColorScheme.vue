<template>
    <my-page title="配色">
        <div class="row">
            <div class="col-sm-12">
                <div id="panel">
                    <div id="nav"><h4>按色相的搭配分类</h4>
                        <div><a href="#hue_0">红色</a><a
                                href="#hue_1">橙色</a><a
                                href="#hue_2">黄色</a><a
                                href="#hue_3">黄绿色</a><a
                                href="#hue_4">绿色</a><a
                                href="#hue_5">青绿色</a><a
                                href="#hue_6">蓝色</a><a
                                href="#hue_7">蓝紫色</a><a
                                href="#hue_8">紫色</a><a
                                href="#hue_9">紫红色</a></div>
                        <h4>按印象的搭配分类</h4>
                        <div><a href="#character_0">柔和、明亮、温柔 </a><a
                                href="#character_1">柔和、洁净、爽朗 </a><a
                                href="#character_2">可爱、快乐、有趣 </a><a
                                href="#character_3">活泼、快乐、有趣 </a><a
                                href="#character_4">运动型、轻快 </a><a
                                href="#character_5">轻快、华丽、动感 </a><a
                                href="#character_6">狂野、充沛、动感 </a><a
                                href="#character_7">华丽、花哨、女性化 </a><a
                                href="#character_8">回味、女性化、优雅 </a><a
                                href="#character_9">高尚、自然、安稳 </a><a
                                href="#character_10">冷静、自然 </a><a
                                href="#character_11">传统、高雅、优雅 </a><a
                                href="#character_12">传统、稳重、古典 </a><a
                                href="#character_13">忠厚、稳重、有品位 </a><a
                                href="#character_14">简单、洁净、进步 </a><a
                                href="#character_15">简单、时尚、高雅 </a><a
                                href="#character_16">简单、进步、时尚 </a></div>
                    </div>
                </div>
                <div id="wrapper">
                    <div id="main">
                        <div class="section byhue"><h2>按色相的搭配分类</h2>
                            <blockquote>本节将网页设计中常见的色彩搭配按照色相的顺序归类。每类都以该色相为主，配以其他色相或者同色相的，应用对比和调和的方法，并按照从轻快到浓烈的顺序排序。</blockquote>
                            <div class="sub-section" :id="'hue_' + index" v-for="(asd, index) in asds"><h3>{{ asd.name }}</h3>
                                <blockquote></blockquote>
                                <div class="groups">
                                    <div class="group" v-for="group in asd.groups">
                                        <span class="btn-copy" v-for="color in group" :style="{'background-color': color}">
                                            <input type="text" :value="color">
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="section bycharacter"><h2>按印象的搭配分类</h2>
                            <blockquote>
                                色彩搭配看似复杂，但并不神秘。既然每种色彩在印象空间中都有自己的位置，那么色彩搭配得到的印象可以用加减法来近似估算。如果每种色彩都是高亮度的，那么它们的叠加，自然会是柔和、明亮的；如果每种色彩都是浓烈的，那么它们叠加，就会是浓烈的。当然在实际设计过程中，设计师还要考虑到乘除法，比如同样亮度和对比度的色彩，在色环上的角度不同，搭配起来就会得到千变万化的感觉。因此本书除了要列举出按色相的搭配，也要将印象作为重点的搭配分类列举出来，以供读者参考。
                            </blockquote>
                            <div class="sub-section" :id="'character_' + index" v-for="(asd, index) in asds2"><h3>{{ asd.name }}</h3>
                                <blockquote>{{ asd.desc }}</blockquote>
                                <div class="groups">
                                    <div class="group" v-for="group in asd.groups">
                                        <span v-for="color in group" :style="{'background-color': color}">
                                            <input type="text" :value="color">
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </my-page>
</template>

<script>
    /* eslint-disable */
    export default {
        data () {
            return {
                version: '',
                asds: [
                    {
                        name: '红色',
                        groups: [["#ffffcc","#ccffff","#ffcccc"],["#99cccc","#ffcc99","#ffcccc"],["#ff9999","#996699","#ffcccc"],["#cc9999","#ffffcc","#cccc99"],["#ffcccc","#ffff99","#ccccff"],["#0099cc","#cccccc","#ff6666"],["#ff9966","#ff6666","#ffcccc"],["#cc9966","#666666","#cc9999"],["#ff6666","#ffff66","#99cc66"],["#cc3333","#cccccc","#003366"],["#993333","#cccc00","#663366"],["#cccc99","#666666","#cc9999"],["#ff6666","#ffff00","#0066cc"],["#cc0033","#333333","#cccc00"],["#336633","#990033","#ffcc99"],["#993333","#cc9966","#003300"],["#ff0033","#333399","#cccc00"],["#cc0033","#000000","#003399"],["#000000","#99cc00","#cc0033"],["#999933","#993333","#333300"]]
                    },
                    {
                        name: '橙色',
                        groups: [["#ffcc99","#ffff99","#99cc99"],["#ffcc99","#ccff99","#cccccc"],["#ffcc99","#ffffcc","#99ccff"],["#ff9966","#ffffcc","#99cc99"],["#ff9900","#ffffcc","#336699"],["#cccc33","#ffff99","#cc9933"],["#996600","#ffcc33","#ffffcc"],["#ffffcc","#cc9933","#336666"],["#ff9900","#ffff00","#0099cc"],["#99cc33","#ff9900","#ffcc00"],["#ff9933","#99cc33","#cc6699"],["#ff9933","#ffff00","#3366cc"],["#ff9933","#ffffcc","#009966"],["#ff6600","#ffff66","#009966"],["#990033","#ccff66","#ff9900"],["#ff9966","#996600","#cccc00"],["#cc6600","#999999","#cccc33"],["#cc6600","#cccc33","#336699"],["#000000","#ff9933","#999966"],["#663300","#ff9933","#ffff66"]]
                    },
                    {
                        name: '黄色',
                        groups: [["#ffffcc","#ccffff","#ffcccc"],["#ffff00","#ffffff","#cccc00"],["#99ccff","#ffcc33","#ffffcc"],["#ffff33","#99ccff","#cccccc"],["#ffff00","#ffffff","#9933ff"],["#99ccff","#ffcc33","#ffff33"],["#ffcc00","#66cc00","#ffff99"],["#ff9900","#ffff00","#0099cc"],["#ffcc00","#0000cc","#ffff99"],["#cc9999","#ffffcc","#6666cc"],["#999933","#ffffcc","#cc99cc"],["#cccc00","#666600","#ffff66"],["#ff9966","#ffffcc","#99cc99"],["#ffcc33","#ffffcc","#999966"],["#ffcc99","#ff6666","#ffff66"],["#ffcc99","#999966","#ffff00"],["#ffff99","#99cc99","#666600"],["#999966","#ffff99","#333333"],["#006633","#333300","#cccc99"],["#006633","#663300","#cccc66"]]
                    },
                    {
                        name: '黄绿色',
                        groups: [["#33cc33","#6666cc","#ffffff"],["#cccc33","#ffffff","#ccffcc"],["#ffcc99","#ccff99","#cccccc"],["#cccc00","#999966","#ffffcc"],["#cccc33","#ffffff","#336699"],["#cccc33","#999999","#ccffff"],["#00cc00","#0066cc","#99cccc"],["#99cc33","#ff9900","#ffcc00"],["#99cc33","#ccccff","#663300"],["#cccc33","#993399","#000000"],["#cc6600","#999999","#cccc33"],["#cc9933","#ffff99","#99cc99"],["#669933","#cccc33","#663300"],["#99cc33","#cccccc","#000000"],["#cc6600","#cccc33","#336699"],["#666600","#cccc66","#ccffcc"],["#333366","#99cc33","#336699"],["#666666","#99cc33","#003366"],["#003333","#99cc33","#999999"],["#996633","#ffff99","#99cc66"]]
                    },
                    {
                        name: '绿色',
                        groups: [["#009966","#ffffff","#ffff00"],["#339933","#ffffff","#9933cc"],["#339933","#ffffff","#000000"],["#339933","#99cc00","#ffffcc"],["#ffffcc","#cccc66","#336666"],["#99cc33","#ffff66","#336600"],["#339933","#cc9900","#666666"],["#339966","#cccccc","#003366"],["#669933","#cccccc","#000000"],["#339933","#cccccc","#6699cc"],["#006633","#cccc33","#cc9933"],["#339933","#666633","#cccc66"],["#339933","#ffcc33","#336699"],["#006633","#669933","#99cc99"],["#336666","#996633","#cccc33"],["#003300","#669933","#cccc99"],["#006633","#990033","#ff9900"],["#006633","#333300","#cccc99"],["#006633","#663300","#cccc66"],["#993333","#cc9966","#003300"]]
                    },
                    {
                        name: '青绿色',
                        groups: [["#ccff99","#ffffff","#66cccc"],["#339999","#ffffff","#99ccff"],["#66cc99","#ffffff","#666699"],["#009999","#66cccc","#ccffff"],["#66cccc","#ccff66","#ff99cc"],["#339999","#ffff00","#336699"],["#cc9933","#339999","#ffcc33"],["#ffcc00","#009999","#cc3333"],["#669999","#cccccc","#cc99cc"],["#339999","#cccccc","#000000"],["#339999","#666699","#cccccc"],["#003333","#99cc99","#ffffcc"],["#669999","#ccffcc","#996699"],["#996699","#cccc99","#669999"],["#999966","#cccc99","#339999"],["#336666","#669999","#cccc99"],["#999999","#003366","#669999"],["#663333","#339999","#cccc66"],["#333333","#339999","#ccffcc"],["#336666","#3399cc","#666666"]]
                    },
                    {
                        name: '蓝色',
                        groups: [["#ffffcc","#ccffff","#ffcccc"],["#99cccc","#ffffff","#3399cc"],["#ccffcc","#99cccc","#ffffcc"],["#ccccff","#ffffff","#99ccff"],["#ffcc99","#ffffcc","#99ccff"],["#336699","#ffffff","#99cccc"],["#99cccc","#ffffff","#ccff99"],["#ccccff","#ffffcc","#ccffff"],["#99cccc","#ffffff","#336699"],["#99ccff","#ccffff","#6699cc"],["#99cc33","#ffffff","#3399cc"],["#0099cc","#ffffcc","#666699"],["#cccccc","#003366","#99ccff"],["#0099cc","#ffffff","#666666"],["#cccccc","#6699cc","#666666"],["#336699","#cccc99","#003366"],["#3399cc","#003366","#cccccc"],["#6699cc","#006699","#000000"],["#003366","#cccccc","#006699"],["#999933","#336699","#333333"]]
                    },
                    {
                        name: '蓝紫色',
                        groups: [["#ccffff","#ffffff","#ccccff"],["#cccccc","#ffffff","#666699"],["#99ccff","#ffffff","#333399"],["#6666cc","#ffffff","#ff9999"],["#9999ff","#ffcc33","#ffffcc"],["#0099cc","#ffffcc","#666699"],["#0000ff","#6699ff","#ccffff"],["#6666ff","#66ccff","#ccff66"],["#669999","#ffffcc","#6666cc"],["#9999cc","#ff9999","#666699"],["#003399","#ffcccc","#6699cc"],["#cc6666","#333399","#cccc00"],["#000066","#6666ff","#cccccc"],["#003399","#ccff99","#333333"],["#333366","#cc0033","#cccccc"],["#336699","#cccc66","#333300"],["#003399","#ffff99","#000000"],["#990066","#cccc33","#003399"],["#cc3333","#000000","#003399"],["#333366","#999966","#333333"]]
                    },
                    {
                        name: '紫色',
                        groups: [["#ffffcc","#ffff99","#ccccff"],["#9999cc","#99cc99","#ffffff"],["#ffcccc","#ccccff","#cccc99"],["#9999cc","#ffffcc","#ffcccc"],["#ffcccc","#ff99cc","#ccccff"],["#660066","#ffffff","#663333"],["#cccc99","#333333","#9966cc"],["#cccc00","#ff9966","#663399"],["#996699","#ffcccc","#cc99cc"],["#996666","#cc99cc","#ffcccc"],["#ffcc99","#ff9933","#663366"],["#333399","#ccccff","#cc99cc"],["#663366","#cccccc","#cc99cc"],["#996699","#9999cc","#ccccff"],["#cc9966","#999999","#663366"],["#330033","#666666","#669999"],["#cccccc","#999999","#663366"],["#ff33cc","#cccc99","#663366"],["#663366","#999999","#ccccff"],["#999966","#993333","#330033"]]
                    },
                    {
                        name: '紫红色',
                        groups: [["#ffcccc","#ffffff","#99cc00"],["#ff99cc","#ffffff","#993366"],["#66cc99","#ffffff","#cc6699"],["#cc9999","#ffcccc","#cc99cc"],["#ffcccc","#ffff99","#ccccff"],["#ffff99","#993399","#ff99cc"],["#66cccc","#ccff66","#ff99cc"],["#ff99cc","#003399","#cccc00"],["#ffcccc","#ff99cc","#ccccff"],["#ff9999","#ffcccc","#ff99cc"],["#669966","#cc6699","#ffccff"],["#cccccc","#cc99cc","#cc3399"],["#cc3399","#ffcc99","#ff6666"],["#ff3399","#cccc99","#663366"],["#663366","#ffffcc","#ffcccc"],["#663366","#cccccc","#cc99cc"],["#990066","#ffcc00","#cc0033"],["#990066","#cccccc","#006699"],["#999900","#990033","#000000"],["#990066","#000000","#009966"]]
                    }
                ],
                asds2: [
                    {
                        name: '柔和、明亮、温柔',
                        desc: '亮度高的色彩搭配在一起就会得到柔和、明亮、温和的感觉。为了避免刺眼，设计师一般会用低亮度的前景色调和，同时色彩在色环之间的距离也有助于避免沉闷。',
                        groups: [["#ffffcc","#ccffff","#ffcccc"],["#ffcccc","#ffff99","#ccccff"],["#ff9966","#ff6666","#ffcccc"],["#ffcc99","#ccff99","#cccccc"],["#ffcccc","#ccccff","#ccffcc"],["#ccffff","#cccccc","#ccff99"],["#ffcccc","#ffffff","#99cc99"],["#99cccc","#ffcc99","#ffcccc"],["#ccccff","#ffcccc","#ccffff"],["#ffcc99","#ffffcc","#99cccc"]]
                    },
                    {
                        name: '柔和、洁净、爽朗',
                        desc: '对于柔和、清洁、爽朗的印象，色环中蓝到绿相邻的颜色应该是最适合的。并且亮度偏高。可以看到，几乎每个组合都有白色参与。当然在实际设计时，可以用蓝绿相反色相的高亮度有彩色代替白色。',
                        groups: [["#ccff99","#ffffff","#99ccff"],["#99cccc","#ffffff","#ccff99"],["#ccffcc","#ffffff","#66cccc"],["#ccccff","#ffffff","#99cccc"],["#ccffcc","#99cccc","#ffffcc"],["#ccffff","#ffffff","#ccccff"],["#ccffff","#ffffff","#99ccff"],["#66ccff","#ffffff","#ccffff"],["#6699cc","#ffffff","#99ccff"],["#ccccff","#ffffff","#99ccff"]]
                    },
                    {
                        name: '可爱、快乐、有趣',
                        desc: '可爱、快乐、有趣印象中的色彩搭配特点是，色相分布均匀，冷暖搭配，饱和度高，色彩分辨度高。',
                        groups: [["#66cccc","#ccff66","#ff99cc"],["#ff9999","#ffffff","#ffcc99"],["#ff6666","#ffff66","#99cc66"],["#666699","#ffffff","#ff9999"],["#99cc33","#ff9900","#ffcc00"],["#ff0033","#ffffff","#ff9966"],["#ff9900","#ccff00","#cc3399"],["#99cc33","#ffffff","#ff6600"],["#993366","#cccc33","#666633"],["#66cccc","#ffffff","#666699"]]
                    },
                    {
                        name: '活泼、快乐、有趣',
                        desc: '活泼、快乐、有趣相对前一种印象，色彩选择更加广泛，?最重要的变化是将纯白色用低饱和有彩色或者灰色取代。',
                        groups: [["#cc9999","#ffff99","#666699"],["#ff9900","#ffff00","#0099cc"],["#cccc99","#cc3399","#99cc00"],["#ff6666","#ffff00","#3399cc"],["#cc6600","#999999","#cccc33"],["#ff9933","#ffffcc","#009933"],["#0099cc","#cccccc","#ff6666"],["#ff6600","#ffff66","#009966"],["#cc6633","#ffcc99","#cc6600"],["#cc0066","#009999","#ffcc33"]]
                    },
                    {
                        name: '运动型、轻快',
                        desc: '运动的色彩要强化激烈、刺激的感受，同时还要体现健康、快乐、阳光。因此饱和度较高、亮度偏低的色彩在这类印象中经常登场。',
                        groups: [["#ff6666","#ffff00","#006699"],["#ff9966","#ffffff","#0066cc"],["#339933","#ffcc33","#336699"],["#ff9900","#ffffcc","#336699"],["#cc6600","#cccc44","#336699"],["#99cc33","#ffffff","#0099cc"],["#99cc33","#ff6666","#336699"],["#336699","#ffffff","#99cccc"],["#ff0033","#333399","#cccc00"],["#33cc99","#ffff00","#336699"]]
                    },
                    {
                        name: '轻快、华丽、动感',
                        desc: '华丽的印象要求页面充斥有彩色，并且饱和度偏高，而亮度适当减弱则能强化这种印象。',
                        groups: [["#990066","#ffcc00","#cc0033"],["#ffcc33","#333399","#ff0033"],["#666699","#ffff00","#ff0033"],["#ff0033","#006699","#ffff33"],["#ffcc00","#009999","#cc3366"],["#ff0033","#cccc00","#006699"],["#cccc00","#ff9933","#663399"],["#ff9933","#ffff00","#336699"],["#cc3333","#ffcccc","#99cc00"],["#003399","#ffff00","#ff6600"]]
                    },
                    {
                        name: '狂野、充沛、动感',
                        desc: '狂野的印象空间中少不了低亮度的色彩，甚至可以用适当的黑色搭配。其他有彩色的饱和度高，对比强烈。',
                        groups: [["#990066","#ffff00","#003399"],["#cc0033","#000000","#003399"],["#003399","#ffff00","#F00000"],["#cc3333","#cccccc","#003366"],["#cc0033","#333333","#cccc00"],["#000000","#99cc00","#cc0033"],["#ff0033","#333333","#ff9900"],["#990066","#000000","#009966"],["#666666","#ff6600","#333333"],["#993333","#cccc00","#663366"]]
                    },
                    {
                        name: '华丽、花哨、女性化',
                        desc: '女性化的页面中紫色和品红是主角、粉红、绿色也是常用色相。一般它们之间要进行高饱和的搭配。',
                        groups: [["#ffff99","#993399","#ff99cc"],["#ff6666","#ffffff","#339999"],["#ff99cc","#003399","#ccff00"],["#66cc99","#ffffff","#cc6699"],["#cc3399","#ffcc99","#ff6666"],["#ffcccc","#ffffff","#993366"],["#cc6699","#ffff00","#666699"],["#cc6699","#99cc66","#663366"],["#ff33cc","#cccc99","#663366"],["#cc3399","#ffcc99","#ff6666"]]
                    },
                    {
                        name: '回味、女性化、优雅',
                        desc: '优雅的感觉很奇特，色彩的饱和度一般要降下来。一般以蓝、红之间的相邻，调节亮度和饱和度进行搭配。',
                        groups: [["#cccccc","#cc99cc","#cc3399"],["#ffcccc","#ff99cc","#ccccff"],["#cc3399","#9933cc","#cc99cc"],["#9999cc","#ffffcc","#ffcccc"],["#663366","#cccccc","#cc99cc"],["#ff9999","#ffcccc","#ff99cc"],["#996666","#cc99cc","#ffcccc"],["#cc9999","#cccccc","#ffcccc"],["#ff9999","#996699","#ffcccc"],["#996699","#ffcccc","#cc99cc"]]
                    },
                    {
                        name: '高尚、自然、安稳',
                        desc: '高尚一般要用低亮度的黄绿色，色彩亮度降下去，注意色彩的平衡，页面就会显得安稳。',
                        groups: [["#cccc33","#ffff99","#cc9933"],["#cc9966","#cccc66","#669999"],["#ff9966","#996600","#cccc00"],["#cccc66","#660033","#cc6600"],["#cccc00","#666600","#ccccff"],["#cc9933","#009999","#ffcc33"],["#999966","#cccc99","#339999"],["#99cc99","#669933","#336633"],["#666633","#999933","#cc9966"],["#660000","#cc9900","#cccc99"]]
                    },
                    {
                        name: '冷静、自然',
                        desc: '绿色是冷静、自然印象的主角，但是绿色作为页面的主要色彩，容易陷入过于消极的感觉传达，因此应该特别重视图案的设计。',
                        groups: [["#ffff99","#99cc99","#666600"],["#996633","#ffff99","#99cc66"],["#006600","#66cc66","#ccff99"],["#666600","#cccc66","#ccffcc"],["#669933","#cccc33","#663300"],["#666633","#999933","#cc9966"],["#003300","#669933","#cccc99"],["#006633","#663300","#cccc66"],["#666600","#ffffcc","#999999"],["#006633","#333300","#cccc99"]]
                    },
                    {
                        name: '传统、高雅、优雅',
                        desc: '传统的内容一般要降低色彩的饱和度，特别是棕色很适合。前面介绍紫色也是高雅和优雅印象的常用色相。',
                        groups: [["#999933","#ffffcc","#cc99cc"],["#cc9966","#666666","#cc9999"],["#cccc99","#333333","#9966cc"],["#cccc99","#666666","#cc9999"],["#996699","#cccc99","#669999"],["#cc9966","#999999","#666666"],["#339966","#cccccc","#996699"],["#663366","#999999","#ccccff"],["#996699","#9999cc","#ccccff"],["#cccc99","#999999","#663300"]]
                    },
                    {
                        name: '传统、稳重、古典',
                        desc: '传统、稳重、古典都是保守的印象，色彩的选择上应该尽量用低亮度的暖色，这种搭配符合成熟的审美。',
                        groups: [["#6699cc","#663366","#cccc99"],["#990033","#ccff66","#ff9900"],["#666699","#660033","#99cc99"],["#663300","#ff9933","#ffff66"],["#990033","#006633","#cccc00"],["#660033","#999933","#660099"],["#993366","#cccc33","#666633"],["#996600","#cccc66","#666600"],["#009933","#cc9900","#666666"],["#666633","#cccc33","#cc3366"]]
                    },
                    {
                        name: '忠厚、稳重、有品位',
                        desc: '亮度、饱和度偏低的色彩会给人忠厚、稳重的感觉。这样的搭配为了避免色彩过于保守，使页面僵化、消极，应当注重冷暖结合和明暗对比。',
                        groups: [["#ffffcc","#cc9933","#336666"],["#336666","#996633","#cccc33"],["#336633","#990033","#ffcc99"],["#333366","#669999","#996600"],["#993333","#cc9966","#003300"],["#336633","#cccc99","#333366"],["#663300","#999933","#333333"],["#663366","#666666","#333366"],["#999900","#990033","#cc99cc"],["#333366","#990033","#cccccc"]]
                    },
                    {
                        name: '简单、洁净、进步',
                        desc: '简单、洁净的色彩在色相上可以用蓝、绿表现，并大面积留白。而进步的印象可以多用蓝色，搭配低饱和甚至灰色。',
                        groups: [["#cccccc","#ffffff","#666699"],["#ccff66","#ffffff","#003366"],["#99ccff","#ffffff","#336699"],["#cccc33","#ffffff","#336699"],["#0099ff","#ffffcc","#666699"],["#99cc33","#cccccc","#000000"],["#cccccc","#003366","#99ccff"],["#0099cc","#ccff66","#666666"],["#3399cc","#003366","#cccccc"],["#ABCDEF","#ABCDEF","#ABCDEF"]]
                    },
                    {
                        name: '简单、时尚、高雅',
                        desc: '灰色是最为平衡的色彩，并且是塑料金属质感的主要色彩之一，因而要表达高雅、时尚，可以适当使用，甚至大面积使用。但是要注重图案和质感的构造。',
                        groups: [["#99ccff","#ffff66","#666666"],["#336666","#ffffff","#999999"],["#0099cc","#ffffff","#666666"],["#999999","#cccccc","#336666"],["#cccccc","#999999","#663366"],["#666666","#cccccc","#6699cc"],["#999999","#ffffff","#333366"],["#669999","#cccccc","#666666"],["#999999","#cccccc","#333333"],["#ABCDEF","#ABCDEF","#ABCDEF"]]
                    },
                    {
                        name: '简单、进步、时尚',
                        desc: '表现进步的色彩主要以蓝色为主，搭配灰色。而色彩的明度统一、色相相邻，在色彩上会显得简洁。',
                        groups: [["#333366","#99cc33","#336699"],["#999999","#003366","#669999"],["#003399","#ccff99","#333333"],["#999933","#336699","#333333"],["#666666","#99cc33","#003366"],["#999999","#336699","#333333"],["#3366cc","#cccc66","#333300"],["#6699cc","#006699","#000000"],["#003366","#cccccc","#006699"],["#000000","#999999","#003366"]]
                    },
                ]
            }
        },
        mounted() {
            this.clipboard = new Clipboard('.btn-copy')
            this.clipboard.on('success', function(e) {
//                console.info('Action:', e.action);
//                console.info('Text:', e.text);
//                console.info('Trigger:', e.trigger);
                e.clearSelection()
            })
            this.clipboard.on('error', function(e) {
                console.log('错误')
            })
        },
        destroyed() {
            this.clipboard.destroy()
        }
    }
</script>

<style lang="scss" scoped>
    #wrapper {
        overflow: auto;
        overflow-x: hidden;
        margin-left: 220px;
        height: 480px;
    }

    #main {
        margin: 0 auto;
        width: 640px
    }

    h2, h3 {
        margin-bottom: 1em;
        padding: .2em .4em;
        border-bottom: 3px solid #CCF;
        background: #000;
        color: #fff
    }

    h2 {
        display: inline-block
    }

    blockquote {
        margin-bottom: 1em
    }

    .section, .sub-section, .groups {
        clear: both
    }

    .section {
        overflow: hidden;
        margin: 5em 0
    }

    .sub-section {
        overflow: hidden;
        margin-bottom: 3em
    }

    .group {
        float: left;
        margin: 0 7px;
        width: 198px;
        height: 85px;
        _display: inline
    }

    .group span {
        float: left;
        margin: 1px;
        width: 60px;
        height: 60px;
        text-align: center
    }

    .group input {
        display: block;
        margin-top: 64px;
        background: #fff;
        font-family: "Lucida Console", "Lucida Sans Typewriter", Monaco, "Bitstream Vera Sans Mono", monospace;
        border: none 0;
        font-size: 14px;
        width: 100%;
        text-align: center
    }

    #panel {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 220px;
        height: 100%;
        background: #111;
        color: #fff;
        text-shadow: 0 1px 2px #000
    }

    #header {
        text-align: center
    }

    #header h1 {
        margin: .5em;
        font-size: 18px;
        font-weight: normal
    }

    #header h1 span {
        display: block;
        font-size: 40px
    }

    #header address {
        clear: both;
        margin-bottom: 2em;
        color: #999
    }

    #header a {
        color: #999
    }

    #nav {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        overflow: auto;
        background: #222;
        _width: 195px;
        _height: expression(this.parentNode.clientHeight - 155+"px")
    }

    #nav h4 {
        margin: .4em 1em 0;
        padding: .4em 0;
        border-bottom: 1px solid #333;
        color: #aaa
    }

    #nav a {
        margin: 0 .4em;
        display: block;
        padding: .4em .6em;
        color: #f7f7f7;
        text-decoration: none
    }

    #nav a:hover {
        background: #111;
        color: #fff
    }

    ::-webkit-scrollbar {
        width: 7px
    }

    ::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, .1)
    }

    ::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, .3)
    }

    #nav::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, .1)
    }

    #nav::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, .3)
    }

    .aside {
        margin: 50px auto 0;
        width: 728px;
    }

    .morelinks {
        text-align: center;
        color: #999;
        margin: 50px 0;
        text-decoration: none;
    }

    .morelinks a {
        color: #666;
    }
</style>
