import os, datetime, sys, time

if(len(sys.argv)>1):
    date = datetime.datetime.now().strftime('%Y%m%d')
    print(date)

    gitcommand = f'''
    git add . & git commit -m "{sys.argv[1]} - Update LAB-FRONT V{date}" & git push
    '''
    os.system(gitcommand)

else:
    while(True):
        date = datetime.datetime.now().strftime('%Y%m%d')
        print(date)

        gitcommand = f'''
        git add . & git commit -m "Update LAB-FRONT V{date}" & git push
        '''
        os.system(gitcommand)
        time.sleep(300)
# print(a)