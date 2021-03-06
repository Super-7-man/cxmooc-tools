export class SystemConfig {
    public static version = 2.5;
    public static url = "https://cx.icodef.com/";
    public static hotVersion = "2.5.0";
    //TODO:优化规则,可以通过ci自动生成匹配规则到tampermonkey和manifest文件中
    public static match = [
        "*://*/mycourse/studentstudy?*",
        "*://*/work/doHomeWorkNew?*",
        "*://*/work/selectWorkQuestionYiPiYue?*",
        "*://*/exam/test/reVersionTestStartNew?*",
        "*://*/ztnodedetailcontroller/visitnodedetail?*",
        "*://*/antispiderShowVerify.ac*",
        "*://*/html/processVerify.ac?*",
        "*://*/exam/test/reVersionPaperMarkContentNew?*",
        "*://*/ananas/modules/*/index.html?*",
        "*://*/exam/test?*",
        "*://*/course/*.html?*",

        "*://examh5.zhihuishu.com/stuExamWeb.html*",
        "*://onlineexamh5new.zhihuishu.com/stuExamWeb.html*",
        "*://studyh5.zhihuishu.com/videoStudy.html*",

        "*://www.icourse163.org/learn/*",
        "*://www.icourse163.org/spoc/learn/*"
    ];

}
