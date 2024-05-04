var tipuesearch = {"pages":[{"title":"About","text":"cmsimde 內容管理系統 倉儲: https://github.com/40971219/cd2024 網站: https://40971219.github.io/cd2024/ 簡報: https://40971219.github.io/cd2024/reveal 網誌: https://40971219.github.io/cd2024/blog","tags":"misc","url":"./pages/about/"},{"title":"W10","text":"協同產品設計實習課程任務 過程影片 任務一 建立學員的倉儲、網站與分組連結 2b學員資料 任務二 鋼球平衡台 PID 控制與模擬 論文一:Construction and theoretical study 本文研究了球體平衡平台的構造和理論研究，探討了使用自動控制理論穩定動態系統時存在的限制。 主要内容： - 系統概述： 作者設計並搭建了一個球體平衡平台，使用電阻式觸摸面板檢測球體位置，使用 Arduino 微控制器處理數據并控制伺服電機，通過調整平台傾斜角度來保持球體平衡。 - 數學模型： 作者利用牛頓力學建立了球體平台系統的數學模型，考慮了球體的平移和旋轉運動，并通過線性化得到了適用於控制器設計的線性模型。 - 控制策略： 作者采用了 PID 控制器來控制平台傾斜角度，并通過 Matlab 仿真驗證了控制器的性能。 實作與結果： 作者將 PID 控制器實現在 Arduino 上，并通過實驗測試了球體平衡平台的性能。結果表明，該系統能够在一定程度上穩定球體，但存在靜態誤差，且無法精確地將球體定位在平台中心。 總結： 該研究展示了球體平衡平台作為一個動態系統在控制理論教育和研究中的價值。儘管存在一些限制，但该系統仍然能够有效地演示控制理論概念，并為學生提供動手實踐的機會。作者提出的改進方案可以進一步提高系統的性能，使其更加適用於更廣泛的應用。 論文二:A real time control system for balancing a ball on a platform with FPGA parallel implementation 這篇論文提出了一個利用 PID 控制器和 FPGA 平行計算來提高球體平衡平台控制系統性能的新方案。 主要内容： - 問題陳述： 作者強調了在當今自動化需求下，開發高效的實時控制系統的重要性，特別是針對具有多個參數的複雜對象。 FPGA 因其高計算能力、可重構性和真正的并行計算能力，成為了實現此類控制系統的理想平台。 - 數學模型： 作者利用拉格朗日方程建立了球體在平台上運動的數學模型，并通过简化假设和拉普拉斯變換得到了系統的傳遞函數。 - PID 控制器設計： 作者選擇了 PID 控制器來穩定球體的位置，并通過 Matlab Simulink 仿真驗證了控制器的有效性。 - FPGA 實現： 作者將 PID 控制算法分解為基本的算術運算，并設計了 FPGA 上的并行計算單元，以提高控制系统的速度和效率。 實驗結果： 實驗結果證明，FPGA 實現的并行 PID 控制器能够有效地提高控制精度，并實現了對球體位置的實時控制。 總結： 該論文提供了一個利用 FPGA 平行計算技術提高球體平衡平台控制系統性能的新方案。實驗結果證明了該方法的有效性，并展示了其在實時控制應用中的潛力。該方案可以應用於其他具有多個控制參數的高速對象，并为开发更高效的控制系統提供了新的思路。 論文三:Design and Implementation a Ball Balancing System for Control Theory Course 這篇文章介紹了一種設計並實現低成本球體平衡系統的項目，該系統旨在作為控制理論課程的教學工具。 主要内容： - 系統設計與原型： 作者探索了三種不同的原型設計，比較了它們的合理性和成本效益，最终選擇了一個由木頭製成的平衡、堅固且便攜的模型。 - 控制算法： 該系統使用 Arduino 微控制器、超音波距離感測器和伺服電機來保持球體在平台上的平衡。主要控制算法是 PID 控制，通過調整平台的角度來最小化球體的實際位置與目標位置之間的誤差。 - 自適應 PID 控制： 作者討論了自適應 PID 控制的概念，並鼓勵學生在微控制器編程中應用該方法，根據實時控制情況動態調整控制參數。 - MATLAB 數據採集： 作者設計了一個介面程序，用於在 MATLAB 中繪製球體的實時位置曲線，讓學生熟悉 MATLAB 編程和其在機電系統中的應用。 - 實驗結果： 實驗結果表明，該系統能够有效地平衡球體，並减少誤差。然而，由於球體重量輕、摩擦力不足以及參數調整問題，系統仍然存在一些抖動，需要進一步改進。 總結： 該項目成功地開發了一個低成本的球體平衡系統，并将其應用於控制理論教學。該系統幫助學生理解閉環控制、回饋系統和 PID 算法等重要概念，并提高了他們的編程能力。作者也展望了未來的工作，例如通過改進硬體和軟件來提高系統的性能和穩定性。 論文四:Simulation_and_Experimental_Study_of_Ball_Position 本文探討雙軸平台上球體位置控制的模擬與實驗研究，並使用狀態空間方法進行分析。 主要內容： - 球體平台模型建立： 作者利用牛頓第二定律推導出球體平台系統的數學模型，考慮了球體的平移和旋轉慣性，並忽略了摩擦力。 - 直流電機控制： 平台傾斜角度由標準位置迴路控制的直流電機控制。作者使用 PI 控制器進行角度控制，並通過模擬和實驗驗證了控制器的性能。 - 三種控制結構比較： 作者設計並比較了三種控制結構來實現球體位置穩定和軌跡跟踪： - PD 控制器： 簡單且有效的控制方法，但存在穩態誤差。 - 狀態空間回饋： 利用系統狀態變數（球體位置和速度）進行控制，可以消除穩態誤差。 - 帶狀態空間回饋的狀態空間觀測器： 通過觀測器估計球體速度，避免了直接微分帶來的噪聲放大問題，同時保持了狀態空間回饋的優點。 實驗結果： 實驗結果表明，所有三種方法都能夠穩定球體的位置，但帶狀態空間回饋的狀態空間觀測器在跟踪性能方面表現最佳。 總結： 本文提供了一個關於球體平台控制系統設計的全面研究，涵蓋了建模、控制設計、模擬和實驗驗證。作者提出的方法和實驗結果為開發更複雜的平衡控制系統提供了重要的參考。 論文五:Ball_on_the_plate_balancing_control_system 這篇文章介紹了一個用於平衡球體的雙自由度平台的機械設計和控制演算法。該系統使用步進電機和電阻式觸摸屏，并通過微控制器實現了雙迴路控制系統，以維持球體在平台中心的穩定位置。 主要内容： - 背景介紹： 文章首先討論了平衡問題在控制系統中的重要性，并列舉了平衡技術的廣泛應用，例如攝影、導航、運輸工具控制以及機器人等。 - 系統設計： 作者詳細描述了實驗平台的機械設計，包括木質底座、支撐塔、有機玻璃板、電阻式觸摸屏、步進電機、位置傳感器、控制板和電源等部件。 - 控制系統： 該系統採用了雙迴路下屬自動控制系統，其中外迴路負責控制球體的位置（使用電阻式觸摸屏獲取數據），內迴路負責控制平台的位置（使用電機位置傳感器獲取數據）。兩種迴路都使用了 PID 控制器來實現精確控制。 實驗結果： 實驗結果表明，該系統能夠有效地將球體維持在電阻式觸摸屏的中心點，并能够在受到外部干擾時将其返回中心位置。系統的階躍響應穩定時間約為 3 秒。 總結： 該研究成功地設計并實現了一個球體平衡平台，為平衡控制技術的研究和教學提供了新的方案。其主要優點在于使用了步進電機和電阻式觸摸屏，避免了傳統方案中使用伺服電機和外部計算機的需求，使得系統更加緊湊和易於使用。該研究成果可以應用於更廣泛的平衡控制領域，并具有重要的實踐價值。 論文六:2D Ball Balancer Control using QUARC 這篇教學手冊提供了一個在 Quanser 2D 球體平衡平台上設計和實作位置控制系統的實驗指南。實驗使用了 QUARC 軟體和 PID 控制技術，旨在説明學生學習和理解控制理論中的重要概念。 主要內容： - 模型建立： 首先，手冊指導學生從第一原理推導球體平台系統的非線性運動方程式，并通过线性化得到系統的傳遞函數。 - 級聯控制設計： 实验采用了級聯控制結構，包括內環和外環控制： - 內環控制： 使用比例-速度 (PV) 控制器來控制伺服電機軸的位置，以滿足特定的時間響應要求。 - 外環控制： 使用比例-積分-微分 (PID) 控制器來控制球體在平台上的位置，并通過極點配置方法計算控制器參數以滿足指定的性能指標。 - 控制技術： 手冊探討了設定點權重和積分器抗飽和等控制技術，以改善系統的性能和穩定性。 - 模擬： 使用 Simulink 模型對閉環系統進行模擬，以驗證控制器設計和性能指標是否滿足要求。 - 實作： 將設計好的控制器在 Quanser 2D 球體平衡平台上進行實作，并使用 QUARC 軟體進行數據採集和分析。 - 實驗步驟： 手冊提供了詳細的實驗步驟，包括 PD 控制和 PID 控制的模擬和實作，以及階躍響應、斜坡響應和正弦響應測試。 - 結果分析： 學生需要分析實驗結果，并与理論預期進行比較，以評估控制系統的性能和效果。 總結： 這篇教學手冊提供了一個全面且實用的實驗指南，涵蓋了球體平衡平台控制系統設計和實作的各个方面。它为學生提供了一個學習和理解控制理論概念的平台，并培養了他們的實踐能力和解决問題的能力。 利用 Python 模組將系統控制過程, 鋼球在平衡台上的 x 方向座標與 y 方向, 並利用 matplotlib 畫出來 1.開啟可攜程式系統中的 CoppeliaSim 2.開啟鋼球平衡台模擬場景 3.啟動可攜程式系統, pip install keyboard cbor pyzmq matplotlib 4.在 SciTE 中執行上列程式, 確定系統穩定後, 按下 q 終止模擬 5.matplotlib 將畫出鋼球在平台上的 x 與 y 座標圖 x y 座標圖 任務三 鋼球平衡台零組件繪圖 檔案連結","tags":"w10","url":"./2024-Spring-40971219-w10-blog-tutorial.html"},{"title":"W11","text":"協同產品設計實習課程心得 將課程心得上傳至指定網站 本課程學習利用方法進行多人分工合作，從學期初的各種倉儲維護方法，接著是學習新的編寫文章方法\"LATEX\"，再來是藉由AI的幫助進行指定任務，不管是將影音上字幕，或是文章的重點擷取，幾乎所有事AI都能輔助處理，而現階段工作是NX的學習，以及CoppeliaSim的場景模擬。 這門課程可能與以往的學習方法不同，很多事情要自己找解決方法，而作業也不是要交到ULearn，沒有強制的規定要甚麼時候交，或許是因為重修的關係，更清楚自己該做甚麼，每周講完都要在周末將當周任務完成，至於設備的問題，或許學校的設備不盡人意，沒有辦法跑快一點，但老師都有提供可攜軟體，就算在宿舍只要有電腦有網路都能完成，最後，這門課程是存在很多值得學習的內容，而關鍵是要有耐心地逐一破解，就能順利過關了。 nx繪圖學習 學習使用新的方式繪圖","tags":"w11","url":"./2024-Spring-40971219-w11-blog-tutorial.html"},{"title":"W8 期中資料整理","text":"協同產品設計實習課程期中報告 w8 期中報告 將前幾週的作業整理並介紹個人負責部分","tags":"w8","url":"./2024-Spring-40971219-w8-blog-tutorial.html"},{"title":"W6 NX檔案下載及安裝","text":"協同產品設計實習課程NX w6 NX檔案下載及安裝 將NX檔案下載及安裝成可攜程式","tags":"w6","url":"./2024-Spring-40971219-w6-blog-tutorial.html"},{"title":"W5 教學影片整理","text":"協同產品設計實習課程上字幕 w5 教學影片整理 cd2024 2b w4 以第六組為例, 利用 Codespaces 改版 11 逐字稿 在github中直接啟動codespaces 以chmod u+x init_replit和./init_replit來啟動python模組 每人有120code hours 接著就能夠進行網站改版與推送 cd2024 2b w4 如何上傳 LaTeX 範例檔案並利用 Actions 在線上編譯出 pdf 12 逐字搞 利用codespaces直接建造資料夾並上傳檔案 利用github上的actions功能直接編譯成pdf，並把結果發布在發布區 在ignore內新增能夠移出不必要檔案的功能","tags":"w5","url":"./2024-Spring-40971219-w5-blog-tutorial.html"},{"title":"W4 latex編譯","text":"協同產品設計實習課程latex w4 latex完成個人部分 完成中翻英報告，個人負責部分為封面至第二章 pdf 所有檔案","tags":"w4","url":"./2024-Spring-40971219-w4-blog-tutorial.html"},{"title":"W3 github倉儲維護","text":"協同產品設計實習課程期中報告方式 w3 github倉儲維護方式 繼上週的以codespaces維護外，還有以gitpod的方式維護，因為codespaces每月有固定使用量，若使用完畢則須要有其他方式維護 w3 Latex學習與編譯 利用老師給的latex範本，進行latex的編譯方式學習。 在下載的可攜套件中，需要在啟動路徑上，加入編譯latex的指令，使得能夠利用可攜進行latex的編譯","tags":"w3","url":"./2024-Spring-40971219-w3-blog-tutorial.html"},{"title":"W2 子模組","text":"協同產品設計實習課程分組配置 w2 分組與子模組 每8人為一組，組長建立分組倉儲，組員以子模組加入分組倉儲 分組倉儲維護 利用github上的codespaces對倉儲進行維護","tags":"w2","url":"./2024-Spring-40971219-w2-blog-tutorial.html"},{"title":"W1 github建立","text":"協同產品設計實習課程初步建設 w1 github建立與Replit的設置 在github中建立個人倉儲，並與replit連接，最後能夠在replit上進行改版","tags":"w1","url":"./2024-Spring-40971219-w1-blog-tutorial.html"},{"title":"2024 Spring 課程","text":"2024 Spring 網際內容管理與協同產品設計實習課程教學導引. 內容管理系統 使用者可以自行利用 cmsimde_site 倉儲作為 Template, 建立自己的網站內容管理系統. 引用網站網址連結的方法: cmsimde_site - 在文章中多次引用同一個網站連結時, 可以使用此種方法. https://github.com/mdecycu/cmsimde_site - 假如想要快速將網址套用 html 網站連結, 可以使用此種方法. cmsimde_site - 也可以使用 Markdown 的標準網站連結使用格式. # 引用 Python 程式的方法 for i in range(10): print(i, \"列出字串\") 也可以直接在 .md 檔案中使用 html 標註, 或加入 Javascript 或 Brython 程式碼. 從 1 累加到 100: 1 add to 100 將 iterable 與 iterator 相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. Filename: .py Run Output 清除輸出區 清除繪圖區 Reload 從 1 累加到 100 part2: 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block Filename: .py Run Output 清除輸出區 清除繪圖區 Reload","tags":"w0","url":"./2024-Spring-w0-blog-tutorial.html"}]};