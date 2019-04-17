Search.setIndex({docnames:["analysis","index","input_file","main","method","modules","report","ruleset","sanitizer","sink","source","test"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,sphinx:55},filenames:["analysis.rst","index.rst","input_file.rst","main.rst","method.rst","modules.rst","report.rst","ruleset.rst","sanitizer.rst","sink.rst","source.rst","test.rst"],objects:{"":{analysis:[0,0,0,"-"],input_file:[2,0,0,"-"],main:[3,0,0,"-"],method:[4,0,0,"-"],report:[6,0,0,"-"],ruleset:[7,0,0,"-"],sanitizer:[8,0,0,"-"],sink:[9,0,0,"-"],source:[10,0,0,"-"],test:[11,0,0,"-"]},"analysis.Analysis":{_Analysis__add_sinks_from:[0,2,1,""],_Analysis__add_sources_from:[0,2,1,""],_Analysis__build_taint_parameter_list:[0,2,1,""],_Analysis__check_sanitizer_subcall:[0,2,1,""],_Analysis__check_source_subcall:[0,2,1,""],_Analysis__check_subcalls:[0,2,1,""],_Analysis__correct_positions:[0,2,1,""],_Analysis__find_matching_sink_method:[0,2,1,""],_Analysis__find_matching_source:[0,2,1,""],_Analysis__find_methods:[0,2,1,""],_Analysis__find_user_controlled_assignments:[0,2,1,""],_Analysis__find_user_controlled_returns:[0,2,1,""],_Analysis__get_sanitizer:[0,2,1,""],_Analysis__in_path:[0,2,1,""],_Analysis__relevant_subcalls:[0,2,1,""],_Analysis__verify_sinks:[0,2,1,""],_Analysis__verify_sources:[0,2,1,""],calculate_complexity:[0,2,1,""],find_global_variables:[0,2,1,""],find_paths_through:[0,2,1,""],find_sanitizers:[0,2,1,""],find_sinks:[0,2,1,""],find_sources:[0,2,1,""],find_taints:[0,2,1,""],find_variable_source:[0,2,1,""],fix_object_names:[0,2,1,""],follow_variables:[0,2,1,""],get_class_name_at:[0,2,1,""],logger:[0,3,1,""],method_calls:[0,2,1,""],unify_object_name:[0,2,1,""],update:[0,2,1,""]},"input_file.InputFile":{column_to_line:[2,2,1,""],detect_extension:[2,2,1,""],detect_filetype:[2,2,1,""],detect_heuristic:[2,2,1,""],detect_magic_number:[2,2,1,""],detection_data:[2,3,1,""],line_to_column:[2,2,1,""],logger:[2,3,1,""],read_detection_data:[2,5,1,""],read_file:[2,3,1,""]},"method.Method":{_Method__add_new:[4,2,1,""],add_sanitizers:[4,2,1,""],add_sinks:[4,2,1,""],add_sources:[4,2,1,""],add_taints:[4,2,1,""],add_variables:[4,2,1,""]},"report.Report":{_Report__generate_report:[6,2,1,""],_Report__report_begin:[6,2,1,""],_Report__report_complexity:[6,2,1,""],_Report__report_end:[6,2,1,""],_Report__report_file:[6,2,1,""],_Report__report_method:[6,2,1,""],_Report__report_module:[6,2,1,""],_Report__report_needed:[6,2,1,""],_Report__report_nothing_found:[6,2,1,""],_Report__report_sink:[6,2,1,""],_Report__report_sinks:[6,2,1,""],_Report__report_taint:[6,2,1,""],_Report__report_taints:[6,2,1,""],generate_html_report:[6,2,1,""],generate_markdown_report:[6,2,1,""],generate_plaintext_report:[6,2,1,""]},"ruleset.Ruleset":{_Ruleset__load_sinks:[7,2,1,""],_Ruleset__load_sources:[7,2,1,""],add_sanitizer:[7,2,1,""],add_sink:[7,2,1,""],add_source:[7,2,1,""],logger:[7,3,1,""],notify_observers:[7,2,1,""],register_observer:[7,2,1,""]},"test.TestAnalysis":{test_calculate_complexity:[11,2,1,""],test_complex_php:[11,2,1,""],test_exclusive_path:[11,2,1,""],test_exclusive_paths:[11,2,1,""],test_find_methods:[11,2,1,""],test_find_sanitized_simple_taints:[11,2,1,""],test_find_sanitizers:[11,2,1,""],test_find_simple_taints:[11,2,1,""],test_find_sinks:[11,2,1,""],test_find_sources:[11,2,1,""],test_find_variable_simple:[11,2,1,""],test_find_variable_source:[11,2,1,""],test_follow_sanitizers:[11,2,1,""],test_follow_sources_direct_returns:[11,2,1,""],test_follow_sources_parameters:[11,2,1,""],test_follow_sources_returns:[11,2,1,""],test_follow_taints:[11,2,1,""],test_follow_taints_classes:[11,2,1,""],test_getenv_sprintf:[11,2,1,""],test_global_taint:[11,2,1,""],test_mutually_exclusive_taint:[11,2,1,""],test_subcall:[11,2,1,""],test_subsubcall:[11,2,1,""],test_subsubcall_harmless:[11,2,1,""],test_subsubcall_two_parameters:[11,2,1,""],test_two_sinks:[11,2,1,""]},"test.TestCGrammar":{test_assignments:[11,2,1,""],test_detect_parameters:[11,2,1,""],test_follow_variables:[11,2,1,""],test_identify_returns:[11,2,1,""],test_multiple_functions:[11,2,1,""],test_multiple_instructions:[11,2,1,""],test_single_instruction:[11,2,1,""],test_unknown_tokens:[11,2,1,""]},"test.TestInputFile":{test_extension_detection:[11,2,1,""],test_fallback_detection:[11,2,1,""],test_heuristic_detection:[11,2,1,""],test_heuristic_detection_empty:[11,2,1,""],test_heuristic_detection_respect_possibilities:[11,2,1,""],test_magic_detection:[11,2,1,""],test_multiple_magic_detection:[11,2,1,""],test_read_binary_file:[11,2,1,""],test_read_file_ascii_dos:[11,2,1,""],test_read_file_ascii_utf8_unix:[11,2,1,""]},"test.TestMain":{test_find_files:[11,2,1,""],test_find_files_exclude:[11,2,1,""],test_find_files_exclude_all:[11,2,1,""],test_find_files_multiple_excludes:[11,2,1,""]},"test.TestPHPGrammar":{test_detect_parameters:[11,2,1,""],test_find_classes:[11,2,1,""],test_multiple_instructions:[11,2,1,""]},"test.TestPythonGrammar":{test_detect_parameters:[11,2,1,""],test_find_classes:[11,2,1,""],test_multiple_instructions:[11,2,1,""]},"test.TestRuleset":{test_load_sanitizers:[11,2,1,""],test_load_sinks:[11,2,1,""],test_load_sources:[11,2,1,""]},analysis:{Analysis:[0,1,1,""],create_list_or_append_to_dict:[0,4,1,""]},input_file:{InputFile:[2,1,1,""]},main:{analyze_files:[3,4,1,""],find_files:[3,4,1,""],generate_report:[3,4,1,""],main:[3,4,1,""]},method:{Method:[4,1,1,""]},report:{Report:[6,1,1,""]},ruleset:{Ruleset:[7,1,1,""]},sanitizer:{Sanitizer:[8,1,1,""]},sink:{Sink:[9,1,1,""]},source:{Source:[10,1,1,""]},test:{TestAnalysis:[11,1,1,""],TestCGrammar:[11,1,1,""],TestInputFile:[11,1,1,""],TestMain:[11,1,1,""],TestPHPGrammar:[11,1,1,""],TestPythonGrammar:[11,1,1,""],TestRuleset:[11,1,1,""],replace_sink_rules:[11,4,1,""],replace_source_rules:[11,4,1,""]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","function","Python function"],"5":["py","staticmethod","Python static method"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:function","5":"py:staticmethod"},terms:{"case":11,"class":[0,2,4,6,7,8,9,10,11],"default":[3,11],"function":[0,3,6,11],"int":[0,2,3,4,6,7,8],"new":[0,4,6,7,11],"return":[0,2,3,6,7,11],"static":2,"true":[0,6],"try":[0,2],"while":4,DOS:11,That:0,The:[0,2,3,4,6,7],___:3,____:[],_____:3,_analysis__add_sinks_from:0,_analysis__add_sources_from:0,_analysis__build_taint_parameter_list:0,_analysis__check_sanitizer_subcal:0,_analysis__check_source_subcal:0,_analysis__check_subcal:0,_analysis__correct_posit:0,_analysis__find_matching_sink_method:0,_analysis__find_matching_sourc:0,_analysis__find_method:0,_analysis__find_user_controlled_assign:0,_analysis__find_user_controlled_return:0,_analysis__get_sanit:0,_analysis__in_path:0,_analysis__relevant_subcal:0,_analysis__verify_sink:0,_analysis__verify_sourc:0,_io:6,_method__add_new:4,_report__generate_report:6,_report__report_begin:6,_report__report_complex:6,_report__report_end:6,_report__report_fil:6,_report__report_method:6,_report__report_modul:6,_report__report_need:6,_report__report_nothing_found:6,_report__report_sink:6,_report__report_taint:6,_ruleset__load_sink:7,_ruleset__load_sourc:7,about:[4,6,7,8,9,10],abov:3,abstract_grammar:0,abstractgrammar:0,accuraci:3,across:11,add:[0,4,7],add_sanit:[4,7],add_sink:[4,7],add_sourc:[4,7],add_taint:4,add_vari:4,added:[0,4,7,11],all:[0,3,7,11],alon:11,alreadi:0,also:[0,11],alwai:0,analys:[3,6,11],analysi:[3,5,6,7,11],analyz:[0,3,6,11],analyze_fil:3,ani:[0,11],append:[0,6],applic:0,arg:0,argument:[0,3,11],ascii:11,assert_:11,assertalmostequ:11,assertdictequ:11,assertequ:11,assertnotalmostequ:11,assertnotequ:11,assertnotregexpmatch:11,assertraisesregexp:11,assertregexpmatch:11,assign:[0,11],assum:3,automat:3,avail:[0,2],avoid:4,awai:3,back:3,base:[0,2,3,4,6,7,8,9,10,11],befor:[0,3,6,7],begin:[2,3,6],belong:0,best:2,binari:11,blank:3,block:11,bodi:11,bool:[0,3,6,7],build:0,calcul:[0,11],calculate_complex:0,call:[0,4,6,7,11],callabl:6,can:11,chang:[0,7],changed_sanit:[0,7],check:[0,6,11],clean:0,column:[0,2],column_to_lin:2,combin:11,command:3,comment:[0,6],compar:0,complex:[0,3,6,11],confus:11,content:2,control:0,convert:2,correctli:11,correspond:[0,2],counttestcas:11,creat:0,create_list_or_append_to_dict:0,current:0,cyclomat:[0,3,11],data:2,defaulttestresult:11,defin:7,definit:[7,8,9,10],depth:7,detect:[2,3,6,11],detect_extens:2,detect_filetyp:2,detect_heurist:2,detect_magic_numb:2,detection_data:2,dict:[0,4,6,7,8,9,10,11],dict_:0,dictionari:[0,7],differ:11,directli:0,directori:[2,11],don:[0,3,11],duplic:4,dure:11,each:[3,11],either:[0,7],element:4,els:[0,11],empti:[2,3,11],encod:11,end:[4,11],error:11,even:11,everyth:11,exclud:[3,11],exclus:[3,11],exist:[0,11],express:[3,11],extend:0,extens:[2,3,11],fail:3,failif:11,failifalmostequ:11,failifequ:11,failunless:11,failunlessalmostequ:11,failunlessequ:11,failunlessrais:11,fall:3,fallback:[3,11],fallback_modul:2,fals:[0,7],file:[0,2,3,6,11],file_:6,filenam:[0,3,6],filepath:3,filetyp:[2,3,11],filter:0,find:[0,3],find_fil:3,find_global_vari:0,find_paths_through:0,find_sanit:0,find_sink:0,find_sourc:0,find_taint:0,find_variable_sourc:0,first:0,fix:0,fix_object_nam:0,flow:0,follow:[0,6,11],follow_vari:0,form:[0,4],format:6,formatt:6,found:[6,11],framework:11,from:[0,2,3,7,11],from_:4,gener:[0,2,3,6],generate_html_report:6,generate_markdown_report:6,generate_plaintext_report:6,generate_report:3,get:[3,7],get_class_name_at:0,global:[0,11],gracefulli:11,grammar:[0,11],guess:2,had:3,handl:11,harmless:11,has:0,hashabl:0,have:[0,3,11],help:3,heurist:[3,11],hold:[4,7,8,9,10],how:6,html:[3,6],identifi:[0,11],ignor:3,independ:11,index:[1,7],indic:[0,6],indirect:[3,6],inform:[4,6,8,9,10],input:[0,2],input_fil:[5,6],inputfil:[2,6,11],insid:11,inspect:0,instead:3,instruct:11,item:0,its:2,jona:3,just:11,kei:0,know:0,known:0,lambda:6,later:0,lazi:3,lead:0,leav:3,let:0,level:[3,7,8],line:[2,3,11],line_to_column:2,list:[0,2,3,6,7,11],load:[7,11],log:3,logger:[0,2,3,7],lvalu:0,magic:[2,11],main:[0,5,11],major:11,make:[0,11],mani:3,markdown:[3,6],match:[0,2,3,11],max:3,mean:3,messag:6,method:[0,2,3,5,6,7,11],method_:0,method_cal:0,method_nam:4,methodnam:11,minimum:3,miss:0,modul:[1,5],more:3,multipl:11,mutual:[3,11],name:[0,3,6],necessari:0,need:[0,6],nest:7,new_rul:11,new_sourc:[0,7],new_valu:0,none:[0,2,3,4,7],noth:[6,11],notifi:7,notify_observ:7,number:[2,11],object:[0,2,4,6,7,8,9,10],object_nam:0,observ:7,occur:0,old:11,one:[3,11],ones:11,onli:[0,7,11],option:[0,2,3,4,6,7],origin:[0,4,7],other:[2,11],otherwis:0,output:[0,3,6],over:11,page:1,paramet:[0,2,3,4,6,7,11],pars:[0,3,11],parser:11,part:0,path:[0,2,3,11],perform:3,php:11,plaintext:[3,6],posit:[0,11],possibl:[0,2,11],possible_sink:0,potenti:0,pre:6,print:[3,6],produc:0,provid:11,put:3,python:11,reach:7,read:[2,3,11],read_detection_data:2,read_fil:2,real:0,real_sink:0,real_sourc:0,realli:0,recogn:11,recogniz:2,refer:[0,11],referenc:3,regist:7,register_observ:7,regular:3,rel:3,relev:7,replac:[0,11],replace_sink_rul:11,replace_source_rul:11,report:[3,5],represent:[4,8,9,10],request:6,resid:6,respect:11,result:[0,6,7],rule:[7,11],ruleset:[0,5,11],run:[3,11],runtest:11,runtim:3,same:[2,3,7,11],sanit:[0,3,4,5,7,11],sanitizers_for_sink:0,save:0,screen:3,search:[0,1,3],second:0,self:0,set:0,sever:3,should:[0,2,3,6],show:3,silent:3,simpl:11,singl:[3,11],sink:[0,3,4,5,6,7,8,11],sink_method:0,sink_method_idx:7,slice:0,sourc:[0,4,5,7,11],source_:0,start:[0,4],statement:0,stdout:3,store:[0,4],str:[0,2,3,4,6,7],string:[6,11],subcal:[0,11],subset:0,successfulli:11,sure:11,taint:[0,4,6,11],taintalyz:[0,2,7,11],taintilyz:[],take:0,test:5,test_assign:11,test_calculate_complex:11,test_complex_php:11,test_detect_paramet:11,test_exclusive_path:11,test_extension_detect:11,test_fallback_detect:11,test_find_class:11,test_find_fil:11,test_find_files_exclud:11,test_find_files_exclude_al:11,test_find_files_multiple_exclud:11,test_find_method:11,test_find_sanit:11,test_find_sanitized_simple_taint:11,test_find_simple_taint:11,test_find_sink:11,test_find_sourc:11,test_find_variable_simpl:11,test_find_variable_sourc:11,test_follow_sanit:11,test_follow_sources_direct_return:11,test_follow_sources_paramet:11,test_follow_sources_return:11,test_follow_taint:11,test_follow_taints_class:11,test_follow_vari:11,test_getenv_sprintf:11,test_global_taint:11,test_heuristic_detect:11,test_heuristic_detection_empti:11,test_heuristic_detection_respect_poss:11,test_identify_return:11,test_load_sanit:11,test_load_sink:11,test_load_sourc:11,test_magic_detect:11,test_multiple_funct:11,test_multiple_instruct:11,test_multiple_magic_detect:11,test_mutually_exclusive_taint:11,test_read_binary_fil:11,test_read_file_ascii_do:11,test_read_file_ascii_utf8_unix:11,test_single_instruct:11,test_subcal:11,test_subsubcal:11,test_subsubcall_harmless:11,test_subsubcall_two_paramet:11,test_two_sink:11,test_unknown_token:11,testanalysi:11,testcas:11,testcgrammar:11,testinputfil:11,testmain:11,testphpgrammar:11,testpythongrammar:11,testruleset:11,textiowrapp:6,than:3,thei:[0,3],them:[0,3],themselv:11,thi:[0,2,3,4,6,7,11],third:11,those:7,through:[0,3],thrown:11,token:11,too:0,trade:3,tree:0,tupl:0,two:11,type:[6,11],under:3,unifi:0,unify_object_nam:0,unit:11,unittest:11,unix:11,unknown:11,updat:[0,4,7],usag:[0,3],use:[0,3],used:[0,6,7,11],user:0,user_controlled_vari:0,uses:0,utf8:11,valu:[0,11],variabl:[0,4,11],variou:6,verbos:3,verifi:0,version:3,vulner:[3,11],vulnscan:[],want:7,warn:[0,2,3,7],wendorf:3,were:6,when:[3,11],where:[0,2,3,6,7],whether:0,which:[0,6,7,11],whole:0,whose:[0,2,3],work:[6,11],yield:3},titles:["analysis module","Welcome to TAINTalyzing\u2019s documentation!","input_file module","main module","method module","Projekt","report module","ruleset module","sanitizer module","sink module","source module","test module"],titleterms:{analysi:0,document:1,indic:1,input_fil:2,main:3,method:4,modul:[0,2,3,4,6,7,8,9,10,11],projekt:5,report:6,ruleset:7,sanit:8,sink:9,sourc:10,tabl:1,taint:[],taintalyz:1,taintilyz:[],test:11,vulnscan:[],welcom:1}})