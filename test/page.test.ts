/// <reference lib="es6"/>

Page({
    extend: {
        k: 'v'
    },
    data: {
        x: 123,
        o: {
            b: false,
            n: 2,
            s: 'sss'
        }
    },
    onLoad() {
        this.route
        this.tapOnBtn()

        getCurrentPages().map(p => p.options)
    },
    onHide() {
    },
    onShow() {
        this.setData({
            x: 2,
            'o.k': 12
        })
        this.route;
        this.extend.k = this.data.o.s
    },
    onReady() {
        const tabbar = this.getTabBar<{ active: number }>()
        if (tabbar) {
            tabbar.setData({ active: 1 })
        }
    },
    tapOnBtn() {
        this.onLoad()
    },
})

Page({
    data: {
        n: 1
    },
    onLoad(op: Record<string, string>) {
        this.setData({
            n: +(op['n'] || 0),
        })
    }
})



Page({
    onLoad(e) {
        e['x']
    },
    backdata: {
        x: 'xx'
        // d: 123
    },
    f() {
        this.backdata.x
    },
    y() {
        this.options.x
    }
})
Page({
    onLoad(e: { x?: string, www: string }) {
        e.www
    },
    f() {
        this.setData({});
        this.options.www
    },
    onTabItemTap() {
        this.f();
    }
})
Page({
    op: {
        a: 'string',
    },
    onLoad(e: Record<'x' | 'y', string>) {
        this.setData(e);
        // this.options.y
        this.options.x
    },
    f() {
        this.options.y
    },
    //     onPageScroll() {
    //     },
    onShareAppMessage() {
        // this.options['e'] = e.from;
        this.onTabItemTap
        this.f()
        // e.from();
        // this.onReady
        // this.onUnload
        // this.
        return this.s();
        // this.
        // return {}
    },
    s() {
        // this.onReachBottom
        // this.data
        this.getTabBar
        this.s()
        // this.onTabItemTap()
        this.route
        this.getTabBar
        this.s();
        this.getTabBar();
        // this.
        // this.
        // this.onTabItemTap();
        return { title: 'xxx' }
    },
    //     onResize(e) {
    //         this.f()
    //         e.size.windowHeight
    //     },
    //     onPullDownRefresh(){
    //     },
    // async 
    onTabItemTap(o) {

        // this.

        o.index
        // o.
        // this.options.y = 
        console.log(o.index)
    }
})

Page({
    data: {
        xxx: 1223
    },
    onLoad() {
        // o.x;
        // this.setData(o);
        // this.x();
        // this.getTabBar()
        // this.

    },
    x() {
        this.options.x
    }
})

Page({
    // data:{},
    onLoad(op) {
        this.setData(op);
    }
})

Page({
    f() {
        this.options.x;
    }
})

interface LoadOptions {
    k: string,
}

Page({
    onLoad(op: LoadOptions) {
        op.k;

    }
})
Page({})


Page({
    data: {
        x: 1,
    },
    shareMessageCard() {
        return {};
    },
    tapOnAction(e: event.Custom) {
    },
    onShareAppMessage(e) {
        this.data.x
        return this.shareMessageCard();
    },
});



Page({
    data: {
        x: '' as 'x' | ''
    },
    onLoad(op: Record<'k', string | undefined>) {
        op.k;
    },
    onShareAppMessage() {
        return this.getF();
    },
    getF() {
        this.getTabBar();
        return {}
    }
})