const chai = require('chai');
const expect = chai.expect;


describe('finAnalyzer app', () => {

    it('Should open "Statitics" page on clicking the "Statistics" icon', async () => {

        const statisticsIcon = await $('android=description("Statistics")');
        const pageTitle = await $('android=className("android.widget.TextView")');

        await statisticsIcon.click();
        
        expect(await pageTitle.getText()).to.equal('Statistics');

})

   it('Should have "Coin Support" option checkable in Settings', async () => {

        const settingsIcon = await $('android=description("Settings")');
        const coinSupportCheckBox = await $('android=resourceId("android:id/checkbox")');

        await settingsIcon.click();

        expect(await coinSupportCheckBox.getAttribute('checkable')).to.equal('true');
    
    })

    it('Should have ".XLS" option checked by default in Import/Export', async () => {

        const importExportIcon = await $('android=description("Import/Export")');
        const formatradioButton = await $('android=className("android.widget.RadioButton").text(".XLS (Microsoft Excel file)")');

        await importExportIcon.click();

        expect(await formatradioButton.getAttribute('checked')).to.equal('true');
    
    })
})