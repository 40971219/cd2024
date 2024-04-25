from browser import window, ajax
  
def fetch_csv_data():
  # CSV 檔案網址
  url = "https://mdecd2024.github.io/2bstud-2bsite/downloads/2b.txt"
  
  def on_complete(req):
    if req.status == 200 or req.status == 0:
      # 讀取 CSV 檔案內容
      content = req.text
  
      # 依照換行符號拆分資料
      lines = content.split('\n')
  
      # 建立空列表儲存資料
      data = []
  
      # 遍歷每一行資料
      for line in lines:
        # 忽略空白行
        if line.strip() == "":
          continue
  
        # 依照逗號拆分資料
        items = line.split(',')
  
        # 將拆分後的資料加入列表
        data.append(items)
  
      # 印出結果
      print(data)
    else:
      print("Error:", req.text)
  
  # 發送 AJAX 請求
  req = ajax.ajax()
  req.bind('complete', on_complete)
  req.open('GET', url, True)
  req.set_header('content-type', 'application/x-www-form-urlencoded')
  req.send()
  
# 呼叫函式讀取 CSV 資料
fetch_csv_data()