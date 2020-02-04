import {Component, OnInit, ViewChild} from '@angular/core';
import {Home, Product} from "../model/home";
import {HomeService} from "../services/home.service";


@Component({
    selector: 'app-tab1',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss']
})

export class HomePage implements OnInit {

    // @ts-ignore
    @ViewChild('slides') slides;
    // 当前图片
    currentPic = 0;
    //假数据
    srcLists:Array<string> = ["/assets/26.jpg", "/assets/27.jpg", "/assets/28.jpg"];
    product: Array<Product>;
    // 页面数据
    home: Home={srcList:[],productList:[]};


    constructor(private homeService:HomeService) {

        setInterval(() => {
            let id = (this.currentPic + 1) % 3;
            this.currentPic = id;
        }, 3000);
    }

    async ngOnInit() {
        console.log('请求数据');
        await this.homeService.home();
        console.log('数据返回');
        this.home.productList = [{yield:'1', productId: 'string', productName: '213'},{yield:'1', productId: 'string', productName: '213'},{yield:'1', productId: 'string', productName: '213'},{yield:'1', productId: 'string', productName: '213'}]
        this.home.srcList = this.srcLists;
    }
    //  click(){
    //     console.log('请求数据');
    //     await this.homeService.home();
    //     console.log('数据返回');
    //     this.home.productList = [{yield:'1', productId: 'string', productName: '213'},{yield:'1', productId: 'string', productName: '213'},{yield:'1', productId: 'string', productName: '213'},{yield:'1', productId: 'string', productName: '213'}]
    // }
    slideOpts = {
        speed: 400,
        loop: true,
        autoplay: {
            delay: 2000,
        },
        on: {
            beforeInit() {
                const swiper = this;
                swiper.classNames.push(`${swiper.params.containerModifierClass}fade`);
                const overwriteParams = {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: true,
                    spaceBetween: 0,
                    virtualTranslate: true,
                };
                swiper.params = Object.assign(swiper.params, overwriteParams);
                swiper.params = Object.assign(swiper.originalParams, overwriteParams);
            },
            setTranslate() {
                const swiper = this;
                const {slides} = swiper;
                for (let i = 0; i < slides.length; i += 1) {
                    const $slideEl = swiper.slides.eq(i);
                    const offset$$1 = $slideEl[0].swiperSlideOffset;
                    let tx = -offset$$1;
                    if (!swiper.params.virtualTranslate) tx -= swiper.translate;
                    let ty = 0;
                    if (!swiper.isHorizontal()) {
                        ty = tx;
                        tx = 0;
                    }
                    const slideOpacity = swiper.params.fadeEffect.crossFade
                        ? Math.max(1 - Math.abs($slideEl[0].progress), 0)
                        : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
                    $slideEl
                        .css({
                            opacity: slideOpacity,
                        })
                        .transform(`translate3d(${tx}px, ${ty}px, 0px)`);
                }
            },
            setTransition(duration) {
                const swiper = this;
                const {slides, $wrapperEl} = swiper;
                slides.transition(duration);
                if (swiper.params.virtualTranslate && duration !== 0) {
                    let eventTriggered = false;
                    slides.transitionEnd(() => {
                        if (eventTriggered) return;
                        if (!swiper || swiper.destroyed) return;
                        eventTriggered = true;
                        swiper.animating = false;
                        const triggerEvents = ['webkitTransitionEnd', 'transitionend'];
                        for (let i = 0; i < triggerEvents.length; i += 1) {
                            $wrapperEl.trigger(triggerEvents[i]);
                        }
                    });
                }
            },
        }
    }

    // 避免鼠标点击后自动滑动失效
    slideDidChange() {
        this.slides.startAutoplay();
    }


}
