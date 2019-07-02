/* This file is currently associated to an HTML file of the same name and is drawing content from it.  Until the files are disassociated, you will not be able to move, delete, rename, or make any other changes to this file. */

function DisplayTemplate_7a8d39c7c26f4add8fdbad40adc3c559(ctx) {
  var ms_outHtml=[];
  var cachePreviousTemplateData = ctx['DisplayTemplateData'];
  ctx['DisplayTemplateData'] = new Object();
  DisplayTemplate_7a8d39c7c26f4add8fdbad40adc3c559.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['TemplateUrl']='~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fItem_Custom_HoverPanel.js';
  ctx['DisplayTemplateData']['TemplateType']='Item';
  ctx['DisplayTemplateData']['TargetControlType']=['SearchHoverPanel'];
  this.DisplayTemplateData = ctx['DisplayTemplateData'];

  ctx['DisplayTemplateData']['ManagedPropertyMapping']={'Title':['Title'], 'Path':['Path'], 'Description':['Description'], 'EditorOWSUSER':['EditorOWSUSER'], 'LastModifiedTime':['LastModifiedTime'], 'CollapsingStatus':['CollapsingStatus'], 'DocId':['DocId'], 'HitHighlightedSummary':['HitHighlightedSummary'], 'HitHighlightedProperties':['HitHighlightedProperties'], 'FileExtension':['FileExtension'], 'ViewsLifeTime':['ViewsLifeTime'], 'ParentLink':['ParentLink'], 'FileType':['FileType'], 'IsContainer':['IsContainer'], 'SecondaryFileExtension':['SecondaryFileExtension'], 'DisplayAuthor':['DisplayAuthor'], 'contentType':['contentType'], 'AuthorOWSUSER':['AuthorOWSUSER'], 'Created':['Created'], 'ProjectDescriptionOWSMTXT':['ProjectDescriptionOWSMTXT'], 'EvidenceBiteHeadliOWSMTXT':['EvidenceBiteHeadliOWSMTXT'], 'EvidenceBiteDescriOWSMTXT':['EvidenceBiteDescriOWSMTXT'], 'ListItemID':['ListItemID'], 'owstaxIdStagex0020ofx0020Project':['owstaxIdStagex0020ofx0020Project'], 'owstaxIdBusinessx0020Categories':['owstaxIdBusinessx0020Categories']};
  var cachePreviousItemValuesFunction = ctx['ItemValues'];
  ctx['ItemValues'] = function(slotOrPropName) {
    return Srch.ValueInfo.getCachedCtxItemValue(ctx, slotOrPropName)
};

ms_outHtml.push('',''
);
        var i = 0;
        var id = ctx.CurrentItem.csr_id;
        ctx.CurrentItem.csr_ShowViewLibrary = !Srch.U.isWebPage(ctx.CurrentItem.FileExtension);
        if(ctx.CurrentItem.IsContainer)
        {
            ctx.CurrentItem.csr_FileType = Srch.Res.ct_Folder
        }

        ctx.currentItem_ShowChangedBySnippet = true;
		var titleCSSClass = "ms-srch-hover-title ms-dlg-heading ms-srch-ellipsis";
		var maxViews = 10000;
ms_outHtml.push(''
,'        <div class="ms-srch-hover-innerContainer ms-srch-hover-standardSize" id="', $htmlEncode(id + HP.ids.inner) ,'">'
,'            <div class="ms-srch-hover-arrowBorder" id="', $htmlEncode(id + HP.ids.arrowBorder) ,'"></div>'
,'            <div class="ms-srch-hover-arrow" id="', $htmlEncode(id + HP.ids.arrow) ,'"></div>'
,'            <div class="ms-srch-hover-content" id="', $htmlEncode(id + HP.ids.content) ,'" data-displaytemplate="DefaultHoverPanel">'
,'                <div id="', $htmlEncode(id + HP.ids.header) ,'" class="ms-srch-hover-header">'
,'                  <div class="ms-srch-hover-close">'
,'						<a href="javascript:HP.Close()" id="\', ',$htmlEncode(id + HP.ids.close),' ,\'" title="\', ',$htmlEncode(Srch.Res.hp_Tooltip_Close),' ,\'">'
,'		                   <img class="js-callout-closeButtonImage" src=" ',$urlHtmlEncode(GetThemedImageUrl('spcommon.png')),' " alt=" ',$htmlEncode(Srch.Res.hp_Tooltip_Close),'" />'
,'		               </a>'
,'		           </div>'
,'				  <!--  <div class="', $htmlEncode(titleCSSClass),'  " id=" ',$htmlEncode(id + HP.ids.title),' " title=" ',$htmlEncode(ctx.CurrentItem.Title),' ">'
,'						',$htmlEncode(ctx.CurrentItem.Title),' '
,'				   </div> -->'
);
            	
			if(!$isNull(ctx.CurrentItem.ViewsLifeTime)) {
				var formattedViewsLifeTime;

				if (ctx.CurrentItem.ViewsLifeTime > maxViews)	{
					formattedViewsLifeTime = maxViews.localeFormat("N0") + "+";  
				} 
				else {
					formattedViewsLifeTime = ctx.CurrentItem.ViewsLifeTime.localeFormat("N0"); 
				}
				var views = "";
				titleCSSClass = titleCSSClass + " ms-srch-hover-title-extraMarginForViews";
				if (ctx.CurrentItem.ViewsLifeTime === 1) {
					views = Srch.Res.hp_Views_Singular;
				} 
				else {
					views = Srch.Res.hp_Views_Plural;
				}				   
                var tooltipViewsEncoded = $htmlEncode(String.format(Srch.Res.hp_Tooltip_Views, formattedViewsLifeTime));
ms_outHtml.push('			'
,'				<div class="ms-srch-hover-popularity ms-metadata" title="', tooltipViewsEncoded ,' ">		'
,'					<div id="', $htmlEncode(id + HP.ids.viewsLifeTime) ,'"> ', $htmlEncode(formattedViewsLifeTime) ,' </div>'
,'					<div> ', $htmlEncode(views) ,' </div>'
,'				</div>'
);
			}
            if (!Srch.U.e(ctx.CurrentItem.Title)) {
ms_outHtml.push('		'
,'                <div class="', titleCSSClass ,'" id="', $htmlEncode(id + HP.ids.title) ,'" title="', $htmlEncode(ctx.CurrentItem.Title) ,'">'
,'                    ', $htmlEncode(ctx.CurrentItem.Title) ,''
,'                </div>'
);						
            }
ms_outHtml.push(''
,'                </div>'
,'				'
,'<!-- Hover Body section start -->			'
,'<div id="', $htmlEncode(id + HP.ids.body) ,'" class="ms-srch-hover-body">'
,'	<!-- ', ctx.RenderBody(ctx) ,' -->'
);if (ctx.currentItem_ShowChangedBySnippet &&
            !Srch.U.n(ctx.CurrentItem.Created) &&
            !$isEmptyString(ctx.CurrentItem.AuthorOWSUSER))
        {
            var CreatedById = id + "_CreatedBy";
            var authorIdentifiers = ctx.CurrentItem.AuthorOWSUSER.split(" | ");
            var authorEmail = "";
            if(!$isNull(authorIdentifiers[0]))
            {
                authorEmail = authorIdentifiers[0];
            }

            var authorDisplayName = "";
            if(!$isNull(authorIdentifiers[1]))
            {
                authorDisplayName = authorIdentifiers[1];
            }

            AddPostRenderCallback(ctx, function()
            {
                EnsureScriptFunc("clienttemplates.js", "RenderUserFieldWorker", function()
                {
                    EnsureScriptFunc("sp.datetimeutil.js", "SP.DateTimeUtil.SPRelativeDateTime", function()
                    {
                        var renderCtx = new ContextInfo();
                        renderCtx.Templates = {};
                        renderCtx.Templates["Fields"] = {};

                        var field =
                        {
                            "FieldType" : "User",
                            "DefaultRender" : "1",
                            "HasUserLink" : "1",
                            "Type" : "User"
                        };

                        var listItem =
                        {
                            "id" : "",
                            "title" : authorDisplayName,
                            "email" : authorEmail
                        };

                        var listSchema =
                        {
                            "EffectivePresenceEnabled" : "1",
                            "PresenceAlt" : "No presence information",
                            "UserDispUrl" : "/_layouts/15/userdisp.aspx"
                        };

                        var htmlUserPresence = RenderUserFieldWorker(renderCtx, field, listItem, listSchema);
                        var convertedDate = SP.DateTimeUtil.IntlDate.createFromJsLocalDate(ctx.CurrentItem.Created, Srch.U.getCalendarType());
                        var createdDate = convertedDate.format("d", Sys.CultureInfo.CurrentCulture.name);
                        var createdTime = convertedDate.format("t", Sys.CultureInfo.CurrentCulture.name);

                        var encodedChangedBySnippet = String.format(
                            $htmlEncode(Srch.Res.hp_ChangedByAuthorDate),
                            htmlUserPresence,
                            $htmlEncode(createdDate),
                            $htmlEncode(createdTime));

                        var targetElement = document.getElementById(CreatedById);
                        if(targetElement)
                        {
                            targetElement.innerHTML = encodedChangedBySnippet.replace('Changed by','Created By');
                        }

                        ProcessImn();
                    });
                });
            });
ms_outHtml.push(''
,'	<div class="ms-srch-hover-subTitle ms-srch-hover-text ms-srch-ellipsis" id="', $htmlEncode(CreatedById) ,'"></div>'
,''
);
            dataShown = true;
            changedBySnippetShown = true;
        }
		ms_outHtml.push(''
,'		'
);if (ctx.currentItem_ShowChangedBySnippet &&
            !Srch.U.n(ctx.CurrentItem.LastModifiedTime) &&
            !$isEmptyString(ctx.CurrentItem.EditorOWSUSER))
        {
            var ChangedById = id + "_ChangedBy";
            var editorIdentifiers = ctx.CurrentItem.EditorOWSUSER.split(" | ");
            var editorEmail = "";
            if(!$isNull(editorIdentifiers[0]))
            {
                editorEmail = editorIdentifiers[0];
            }

            var editorDisplayName = "";
            if(!$isNull(editorIdentifiers[1]))
            {
                editorDisplayName = editorIdentifiers[1];
            }

            AddPostRenderCallback(ctx, function()
            {
                EnsureScriptFunc("clienttemplates.js", "RenderUserFieldWorker", function()
                {
                    EnsureScriptFunc("sp.datetimeutil.js", "SP.DateTimeUtil.SPRelativeDateTime", function()
                    {
                        var renderCtx = new ContextInfo();
                        renderCtx.Templates = {};
                        renderCtx.Templates["Fields"] = {};

                        var field =
                        {
                            "FieldType" : "User",
                            "DefaultRender" : "1",
                            "HasUserLink" : "1",
                            "Type" : "User"
                        };

                        var listItem =
                        {
                            "id" : "",
                            "title" : editorDisplayName,
                            "email" : editorEmail
                        };

                        var listSchema =
                        {
                            "EffectivePresenceEnabled" : "1",
                            "PresenceAlt" : "No presence information",
                            "UserDispUrl" : "/_layouts/15/userdisp.aspx"
                        };

                        var htmlUserPresence = RenderUserFieldWorker(renderCtx, field, listItem, listSchema);
                        var convertedDate = SP.DateTimeUtil.IntlDate.createFromJsLocalDate(ctx.CurrentItem.LastModifiedTime, Srch.U.getCalendarType());
                        var changedDate = convertedDate.format("d", Sys.CultureInfo.CurrentCulture.name);
                        var changedTime = convertedDate.format("t", Sys.CultureInfo.CurrentCulture.name);

                        var encodedChangedBySnippet = String.format(
                            $htmlEncode(Srch.Res.hp_ChangedByAuthorDate),
                            htmlUserPresence,
                            $htmlEncode(changedDate),
                            $htmlEncode(changedTime));

                        var targetElement = document.getElementById(ChangedById);
                        if(targetElement)
                        {
                            targetElement.innerHTML = encodedChangedBySnippet.replace('Changed','Edited');
                        }

                        ProcessImn();
                    });
                });
            });
ms_outHtml.push(''
,'            <div class="ms-srch-hover-subTitle ms-srch-hover-text ms-srch-ellipsis" id="', $htmlEncode(ChangedById) ,'"></div>'
);
            dataShown = true;
            changedBySnippetShown = true;
        }
		ms_outHtml.push('		'
);
var CategoryOrStage='';
var divStyle='';//this variable is used to append if CategoryOrStage contains value


	if(typeof ctx.CurrentItem.contentType!=='undefined' && ctx.CurrentItem.contentType!=null)
			{
				if(  ctx.CurrentItem.contentType.indexOf('Construction Project Evidence')>=0 || ctx.CurrentItem.contentType.indexOf('Construction Generic Evidence Bite')>=0)
					{
						CategoryOrStage=ctx.CurrentItem.owstaxIdBusinessx0020Categories;
						
						if(typeof(CategoryOrStage)!='undefined' && CategoryOrStage.indexOf('|')>=0)
						{
							CategoryOrStage=CategoryOrStage.split('|')[3];
							if(CategoryOrStage.indexOf(';')>=0)
								{
									CategoryOrStage='Categories : '+ CategoryOrStage.split(';')[0];
									divStyle='padding: 10px 0px 0px 0px;';

								}
								else
								{
									CategoryOrStage='Categories : '+ CategoryOrStage;
									divStyle='ms-srch-hover-subTitle ms-srch-hover-text ms-srch-ellipsis';
								}
							if(ctx.CurrentItem.owstaxIdBusinessx0020Categories.split('|').length>9)
							{
							CategoryOrStage=CategoryOrStage+','+ctx.CurrentItem.owstaxIdBusinessx0020Categories.split('|')[9];
							}	

						}

					}
				
				else if(ctx.CurrentItem.contentType.indexOf('Construction Project Datasheet')>=0)
					{
						CategoryOrStage=ctx.CurrentItem.owstaxIdStagex0020ofx0020Project;
						
						if(typeof(CategoryOrStage)!='undefined' && CategoryOrStage.indexOf('|')>=0)
						{
							CategoryOrStage=CategoryOrStage.split('|')[3];
							if(CategoryOrStage.indexOf(';')>=0)
								{
									CategoryOrStage='Stage: '+ CategoryOrStage.split(';')[0];
									divStyle='padding: 10px 0px 0px 0px;';

								}
								else
								{
									CategoryOrStage='Stage: '+ CategoryOrStage;
									divStyle='padding: 10px 0px 0px 0px;';
								}

						}

					
						
					}

	
	}
ms_outHtml.push(''
,'	<div style="', $htmlEncode(divStyle) ,'">', $htmlEncode(CategoryOrStage) ,'</div>'
,'	'
,'		'
,'	</div>	'
,'<!-- Hover Body section end -->		'
,'<!-- Hover Footer/ Action  section start -->	'
,'				<div id="', $htmlEncode(id + HP.ids.actions) ,'" class="ms-srch-hover-actions">'
,'									<!-- ', ctx.RenderFooter(ctx) ,' -->'
,'									   '
);	
						var id = ctx.CurrentItem.id;   
						var appAttribs = "";
						if (!$isEmptyString(ctx.CurrentItem.csr_OpenApp)) { appAttribs += "openApp=\"" + $htmlEncode(ctx.CurrentItem.csr_OpenApp) + "\"" }; 
						if (!$isEmptyString(ctx.CurrentItem.csr_OpenControl)) { appAttribs += " openControl=\"" + $htmlEncode(ctx.CurrentItem.csr_OpenControl) + "\"" };
						
						if (!Srch.U.e(ctx.CurrentItem.ParentLink))
						{
						var itemPath=ctx.CurrentItem.ParentLink;
							var editId = id + HP.ids.open;
							var editTitle = Srch.Res.hp_Tooltip_Open;
							var editText = Srch.Res.hp_Open;

							if (ctx.currentItem_IsOfficeDocument)
							{
								editId = id + HP.ids.open;
								editTitle = Srch.Res.hp_Edit;
								editText = Srch.Res.hp_Edit;
								
							}
							else if (!Srch.U.e(ctx.CurrentItem.ServerRedirectedURL) && !ctx.CurrentItem.IsContainer)
							{
								editId = id + HP.ids.openClient;
								editTitle = Srch.Res.hp_Tooltip_OpenInClient;
								editText = Srch.Res.hp_Edit;
							}
							//Adding Edit item url
							if(typeof ctx.CurrentItem.ParentLink!=='undefined' && ctx.CurrentItem.ParentLink !=null && ctx.CurrentItem.ParentLink.indexOf('AllItems.aspx')>=0)
							{
								itemPath=ctx.CurrentItem.ParentLink.replace('AllItems.aspx','EditForm.aspx?ID=');
								itemPath=itemPath+ctx.CurrentItem.ListItemID;

								
							}
							else
							{
								itemPath=ctx.CurrentItem.ParentLink;
								if(!$isNull(itemPath))
								{
								
									var LibTitle=itemPath.substring(itemPath.lastIndexOf("/")+1,itemPath.length);
									itemPath=itemPath.replace(LibTitle,'EditForm.aspx?ID=');
									itemPath=itemPath+ctx.CurrentItem.ListItemID;
								}
								
							}
							
							if(itemPath!=null && itemPath.indexOf('Forms')>=0)
								{
									editText='Edit Properties';
								}
								else
								{
									editText='Edit';
								}
							
							var editHmtl = String.format('<a clicktype="ActionEdit" id="{0}" class="ms-calloutLink ms-uppercase" href="{1}" title="{2}" {3}>{4}</a>', 
															$htmlEncode(editId), $urlHtmlEncode(itemPath), $htmlEncode(editTitle), appAttribs, $htmlEncode(editText));
				ms_outHtml.push('				'
,'							<div class="ms-srch-hover-action">        '
,'								', editHmtl ,'                   '
,'							</div>'
);
						}
						if (!Srch.U.isSPFSKU() && ctx.CurrentItem.csr_ShowFollowLink && !$isEmptyString(ctx.CurrentItem.Path)){
							var isDoc = true;
							if(!$isNull(ctx.CurrentItem.csr_IsSite) && ctx.CurrentItem.csr_IsSite == true){
								isDoc = false;
							}
				ms_outHtml.push(''
,'							<div class="ms-srch-hover-action">'
,'								<a id="', $htmlEncode(id + HP.ids.follow) ,'" class="ms-calloutLink ms-uppercase" href="javascript:HP.Follow(\'', $scriptEncode(ctx.CurrentItem.Path) ,'\', true, ', isDoc ,')" title="', $htmlEncode(Srch.Res.hp_Tooltip_Follow) ,'">'
,'									', $htmlEncode(Srch.Res.hp_Follow) ,''
,'								</a>'
,'							</div>'
,'							'
,'								<div class="ms-srch-hover-action">'
,'								<a id="', $htmlEncode(id + HP.ids.follow) ,'" class="ms-calloutLink ms-uppercase" href="javascript:HP.Follow(\'', $scriptEncode(ctx.CurrentItem.Path) ,'\', true, ', isDoc ,')" title="', $htmlEncode(Srch.Res.hp_Tooltip_Follow) ,'">'
,'									', $htmlEncode(Srch.Res.hp_Follow) ,''
,'								</a>'
,'							</div>'
);
						}
				ms_outHtml.push(''
,'						<div class="ms-srch-hover-action">'
);
							var emailLink = HP.GetEmailLink(ctx.CurrentItem.Title, ctx.CurrentItem.Path, ctx.CurrentItem.csr_ClientType, ctx.CurrentItem.ServerRedirectedURL);
				ms_outHtml.push(''
,'							<a clicktype="ActionSend" id="', $htmlEncode(id + HP.ids.send) ,'" class="ms-calloutLink ms-uppercase" title="', $htmlEncode(Srch.Res.hp_Tooltip_Send) ,'" href="', $htmlEncode(emailLink) ,'">'
,'								', $htmlEncode(Srch.Res.hp_Send) ,''
,'							</a>'
,'						</div>'
);
				ms_outHtml.push(''
,''
,''
,''
,''
,'				<!-- COB code - added before end of last DIV: -->'
,'				<div class="ms-srch-hover-action">'
,'					<a href="javascript:retrieveListItems(\'', (ctx.CurrentItem.id)  ,'\',\'', (ctx.CurrentItem.Title)  ,'\',\'', (ctx.CurrentItem.Path)  ,'\')" id="', $htmlEncode(id + '_PostToFeed') ,'" class="ms-calloutLink ms-uppercase cob-hp-postaction" title="Export DS">'
,'						Export DS'
,'					</a>'
,'				</div>'
,'				<!-- end COB code -->'
,''
,''
,''
,'				</div>'
,'<!-- Hover Footer/ Action  section end -->	'
,'            </div> '
,'        </div>'
,'	'
);

  ctx['ItemValues'] = cachePreviousItemValuesFunction;
  ctx['DisplayTemplateData'] = cachePreviousTemplateData;
  return ms_outHtml.join('');
}
function RegisterTemplate_7a8d39c7c26f4add8fdbad40adc3c559() {

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("Item_Default_HoverPanel", DisplayTemplate_7a8d39c7c26f4add8fdbad40adc3c559);
}

if ("undefined" != typeof (Srch) &&"undefined" != typeof (Srch.U) &&typeof(Srch.U.registerRenderTemplateByName) == "function") {
  Srch.U.registerRenderTemplateByName("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fItem_Custom_HoverPanel.js", DisplayTemplate_7a8d39c7c26f4add8fdbad40adc3c559);
}

}
RegisterTemplate_7a8d39c7c26f4add8fdbad40adc3c559();
if (typeof(RegisterModuleInit) == "function" && typeof(Srch.U.replaceUrlTokens) == "function") {
  RegisterModuleInit(Srch.U.replaceUrlTokens("~sitecollection\u002f_catalogs\u002fmasterpage\u002fDisplay Templates\u002fSearch\u002fItem_Custom_HoverPanel.js"), RegisterTemplate_7a8d39c7c26f4add8fdbad40adc3c559);
}