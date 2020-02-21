import {Injectable} from '@angular/core';
import {AlertController, ToastController, LoadingController} from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class NativeService {
    okButtonHandler = () => {
        console.log('okButtonClicked');
    };


    constructor(private alertCtrl: AlertController, private toastCtrl: ToastController, private loadingCtrl: LoadingController) {

    }

    async showAlert(message: string, okButtonText: string = '确定', okButtonHandler = this.okButtonHandler, header: string = '温馨提示') {
        //关闭已经存在的alert、toast、loading
        await this.closeTips();
        const alert = await this.alertCtrl.create(
            {
                header, message,
                buttons: [
                    {text: okButtonText, handler: okButtonHandler}
                ]
            });
        return await alert.present();
        //显示新的弹框
    }

    async showToast(message: string, position: 'top' | 'middle' | 'bottom' = 'bottom', duration: number = 3000) {
        //关闭已经存在的alert、toast、loading
        await this.closeTips();
        //显示新的toast
        const toast = await this.toastCtrl.create({message, position, duration});
        return await toast.present();
    }

    async showLoading(message: string = '加载中', duration?: number) {
        //关闭已经存在的alert、toast、loading
        await this.closeTips();
        //显示新的loading
        const loading = await this.loadingCtrl.create({message, duration});
        await loading.present();
        console.log('打开' + new Date());
    }

    async closeLoading() {
        const loading = await this.loadingCtrl.getTop();
        console.log('关闭' + new Date());
        if (loading) {
            await loading.dismiss();
        }
    }

    private async closeTips() {
        //先获取到是否有已经打开的弹框等
        const alert = await this.alertCtrl.getTop();
        if (alert) {
            await alert.dismiss();
        }
        const toast = await this.toastCtrl.getTop();
        if (toast) {
            await toast.dismiss();
        }
        const loading = await this.loadingCtrl.getTop();
        if (loading) {
            await loading.dismiss();
        }
    }
}
