"use client";

import { useCallback } from 'react';
import Image from "next/image";
import styles from './learn.module.css';

export default function Learn() {
  	
  	const onFrameContainerClick = useCallback(() => {
    		// Add your code here
  	}, []);
  	
  	return (
    		<div className={styles.learn}>
      			<div className={styles.navsideMenu}>
        				<div className={styles.navsideMenuChild} />
        				<Image className={styles.screenshot20240919At1021Icon} width={78} height={27} alt="" src="/images/screenshot-2024-09-19.png" />
        				<div className={styles.groupParent}>
          					<div className={styles.rectangleParent}>
            						<div className={styles.groupChild} />
            						<div className={styles.vuesaxtwotonehome2Parent}>
              							<div className={styles.vuesaxtwotonefavoriteChart} />
              							<b className={styles.aum}>Dashboard</b>
            						</div>
          					</div>
          					<div className={styles.rectangleGroup}>
            						<div className={styles.groupItem} />
            						<div className={styles.vuesaxtwotonefavoriteChartParent}>
              							<div className={styles.vuesaxtwotonefavoriteChart} />
              							<b className={styles.aum2}>Portfolio</b>
            						</div>
          					</div>
          					<div className={styles.rectangleGroup}>
            						<div className={styles.groupInner} />
            						<div className={styles.iconmenuproductsParent}>
              							<div className={styles.vuesaxtwotonefavoriteChart} />
              							<div className={styles.aum}>Products</div>
            						</div>
          					</div>
          					<div className={styles.rectangleGroup}>
            						<div className={styles.groupInner} />
            						<div className={styles.iconmenuinvestorsParent}>
              							<div className={styles.vuesaxtwotonefavoriteChart} />
              							<div className={styles.aum}>Transactions</div>
            						</div>
          					</div>
          					<div className={styles.rectangleGroup}>
            						<div className={styles.groupInner} />
            						<div className={styles.vuesaxtwotoneemptyWalletTiParent}>
              							<div className={styles.vuesaxtwotonefavoriteChart} />
              							<div className={styles.aum}>Systamatic<br/>Plan</div>
              							</div>
            						</div>
            						<div className={styles.rectangleGroup}>
              							<div className={styles.groupInner} />
              							<div className={styles.iconmenureportParent}>
                								<div className={styles.vuesaxtwotonefavoriteChart} />
                								<div className={styles.aum}>Goal</div>
              							</div>
            						</div>
            						<div className={styles.rectangleGroup}>
              							<div className={styles.groupInner} />
              							<div className={styles.iconmenureportParent}>
                								<div className={styles.vuesaxtwotonefavoriteChart} />
                								<div className={styles.aum}>Learn</div>
              							</div>
            						</div>
            						<div className={styles.rectangleGroup}>
              							<div className={styles.groupInner} />
              							<div className={styles.iconmenustatementsParent}>
                								<div className={styles.vuesaxtwotonefavoriteChart} />
                								<div className={styles.aum}>Statement</div>
              							</div>
            						</div>
            						<div className={styles.rectangleGroup}>
              							<div className={styles.groupInner} />
              							<div className={styles.iconmenureportParent}>
                								<div className={styles.vuesaxtwotonefavoriteChart} />
                								<div className={styles.aum}>Help</div>
              							</div>
            						</div>
          					</div>
        				</div>
        				<div className={styles.navheader} />
        				<div className={styles.groupContainer}>
          					<div className={styles.rectangleParent7}>
            						<div className={styles.groupChild7} />
            						<div className={styles.groupChild8} />
            						<b className={styles.login}>Login</b>
            						<Image className={styles.vectorIcon} width={9.6} height={5} alt="" src="/images/vector.svg" />
            						<Image className={styles.groupIcon} width={37} height={37} alt="" src="/images/group.png" />
            						<Image className={styles.groupChild9} width={37} height={37} alt="" src="/images/group-child.png" />
            						<div className={styles.partnerLoginParent}>
              							<div className={styles.partnerLogin}>Partner login</div>
              							<Image className={styles.vectorIcon2} width={5} height={9.6} alt="" src="/images/vector-2.svg" />
            						</div>
            						<div className={styles.rectangleWrapper}>
              							<div className={styles.frameChild} />
            						</div>
            						<div className={styles.vectorParent}>
              							<Image className={styles.vectorIcon3} width={9.6} height={5} alt="" src="/images/vector-3.svg" />
              							<div className={styles.investWrapper}>
                								<div className={styles.invest}>Invest</div>
              							</div>
            						</div>
            						<div className={styles.indexFundsParent}>
              							<div className={styles.indexFunds}>Index funds</div>
              							<div className={styles.frameChild} />
            						</div>
            						<div className={styles.learnParent}>
              							<div className={styles.indexFunds}>Learn</div>
              							<div className={styles.frameChild} />
            						</div>
            						<div className={styles.toolsServicesParent} onClick={onFrameContainerClick}>
              							<div className={styles.indexFunds}>{`Tools & services`}</div>
              							<div className={styles.frameChild} />
            						</div>
            						<div className={styles.connectWrapper}>
              							<div className={styles.invest}>Connect</div>
            						</div>
            						<Image className={styles.groupChild10} width={296.5} height={85} alt="" src="/images/group-child-10.svg" />
          					</div>
          					<Image className={styles.screenshot20240919At1021Icon2} width={149} height={51.1} alt="" src="/images/screenshot-2024-09-19-2.png" />
        				</div>
        				<div className={styles.container}>
          					<div className={styles.container2}>
            						<div className={styles.app}>
              							<div className={styles.whatYouCan}>What you can Learn?</div>
                								</div>
                								<div className={styles.app2}>
                  									<div className={styles.masterTheEssentials}>Master the essentials of investing through comprehensive topics designed for your success</div>
                								</div>
                								</div>
                								<div className={styles.container3}>
                  									<div className={styles.container4}>
                    										<div className={styles.container5} />
                    										<div className={styles.app3}>
                      											<div className={styles.container6} />
                      											<div className={styles.wrapperContainer}>
                        												<Image className={styles.containerIcon} width={210.5} height={64} alt="" src="/images/container-icon.svg" />
                      											</div>
                      											<div className={styles.container7}>
                        												<div className={styles.heading3Parent}>
                          													<div className={styles.heading3}>
                            														<b className={styles.mutualFundBasics}>Mutual Fund Basics</b>
                          													</div>
                          													<div className={styles.paragraph}>
                            														<div className={styles.understandingTheFundamentals}>Understanding the fundamentals of mutual funds and how they work</div>
                          													</div>
                        												</div>
                        												<div className={styles.container8}>
                          													<div className={styles.text}>
                            														<b className={styles.startLearning}>Start Learning</b>
                          													</div>
                          													<Image className={styles.containerIcon2} width={16} height={16} alt="" src="/images/arrow-icon.svg" />
                        												</div>
                      											</div>
                      											<div className={styles.container9} />
                    										</div>
                  									</div>
                  									<div className={styles.container10}>
                    										<div className={styles.container11} />
                    										<div className={styles.app3}>
                      											<div className={styles.container12} />
                      											<div className={styles.container13}>
                        												<div className={styles.wrapperContainer2}>
                          													<Image className={styles.containerIcon3} width={64} height={64} alt="" src="/images/icon-2.svg" />
                        												</div>
                        												<div className={styles.container14}>
                          													<b className={styles.b}>2</b>
                        												</div>
                      											</div>
                      											<div className={styles.container15}>
                        												<div className={styles.heading3Group}>
                          													<div className={styles.heading3}>
                            														<b className={styles.mutualFundBasics}>Goal Based Planning</b>
                          													</div>
                          													<div className={styles.paragraph2}>
                            														<div className={styles.alignYourInvestments}>Align your investments with your life goals and aspirations</div>
                          													</div>
                        												</div>
                        												<div className={styles.container16}>
                          													<div className={styles.text2}>
                            														<b className={styles.startLearning}>Start Learning</b>
                          													</div>
                          													<Image className={styles.containerIcon4} width={16} height={16} alt="" src="/images/arrow-icon.svg" />
                        												</div>
                      											</div>
                      											<div className={styles.container17} />
                    										</div>
                  									</div>
                  									<div className={styles.container18}>
                    										<div className={styles.container19} />
                    										<div className={styles.app3}>
                      											<div className={styles.container20} />
                      											<div className={styles.container13}>
                        												<div className={styles.wrapperContainer2}>
                          													<Image className={styles.containerIcon3} width={64} height={64} alt="" src="/images/icon-3.svg" />
                        												</div>
                        												<div className={styles.container14}>
                          													<b className={styles.b}>3</b>
                        												</div>
                      											</div>
                      											<div className={styles.container23}>
                        												<div className={styles.heading3Parent}>
                          													<div className={styles.heading3}>
                            														<b className={styles.mutualFundBasics}>{`Risk & Return`}</b>
                          													</div>
                          													<div className={styles.paragraph}>
                            														<div className={styles.learnToBalance}>Learn to balance risk and return for optimal investment outcomes</div>
                          													</div>
                        												</div>
                        												<div className={styles.container16}>
                          													<div className={styles.text2}>
                            														<b className={styles.startLearning}>Start Learning</b>
                          													</div>
                          													<Image className={styles.containerIcon4} width={16} height={16} alt="" src="/images/arrow-icon.svg" />
                        												</div>
                      											</div>
                      											<div className={styles.container25} />
                    										</div>
                  									</div>
                  									<div className={styles.container26}>
                    										<div className={styles.container27} />
                    										<div className={styles.app6}>
                      											<div className={styles.container28} />
                      											<div className={styles.wrapperContainer4}>
                        												<Image className={styles.containerIcon} width={210.6} height={64} alt="" src="/images/container-icon-4.svg" />
                      											</div>
                      											<div className={styles.container29}>
                        												<div className={styles.heading3Parent2}>
                          													<div className={styles.heading34}>
                            														<b className={styles.smartInvestingPractices}>Smart Investing Practices</b>
                          													</div>
                          													<div className={styles.paragraph4}>
                            														<div className={styles.discoverProvenStrategies}>Discover proven strategies and best practices for successful investing</div>
                          													</div>
                        												</div>
                        												<div className={styles.container30}>
                          													<div className={styles.text2}>
                            														<b className={styles.startLearning}>Start Learning</b>
                          													</div>
                          													<Image className={styles.containerIcon4} width={16} height={16} alt="" src="/images/arrow-icon.svg" />
                        												</div>
                      											</div>
                      											<div className={styles.container31} />
                    										</div>
                  									</div>
                								</div>
                								</div>
                								<div className={styles.container32}>
                  									<div className={styles.container33}>
                    										<div className={styles.container34}>
                      											<div className={styles.app}>
                        												<b className={styles.chooseHowYou}>Choose How you Learn</b>
                      											</div>
                      											<div className={styles.app8}>
                        												<div className={styles.pickTheFormat}>Pick the format that works best for your learning style</div>
                      											</div>
                    										</div>
                    										<div className={styles.container35}>
                      											<div className={styles.container36}>
                        												<div className={styles.container37} />
                        												<div className={styles.app9}>
                          													<Image className={styles.containerIcon9} width={260} height={192} alt="" src="/images/blogs-image.png" />
                          													<div className={styles.container38}>
                            														<div className={styles.heading3Parent3}>
                              															<div className={styles.heading35}>
                                																<div className={styles.easyToReadArticlesOnMarkeParent}>
                                  																	<div className={styles.easyToReadArticlesOn}>Easy-to-read articles on markets, mutual funds, and smart investing practices.</div>
                                  																	<div className={styles.blogs}>Blogs</div>
                                																</div>
                              															</div>
                              															<div className={styles.paragraph5} />
                            														</div>
                            														<div className={styles.button}>
                              															<div className={styles.exploreBlogs}>Explore Blogs</div>
                              															<Image className={styles.icon} width={16} height={16} alt="" src="/images/arrow-icon.svg" />
                            														</div>
                          													</div>
                        												</div>
                      											</div>
                      											<div className={styles.container39}>
                        												<div className={styles.container40} />
                        												<div className={styles.app10}>
                          													<Image className={styles.containerIcon10} width={261} height={192} alt="" src="/images/podcasts-image.png" />
                          													<div className={styles.container41}>
                            														<div className={styles.heading36} />
                            														<div className={styles.paragraph6}>
                              															<div className={styles.podcastsParent}>
                                																<div className={styles.podcasts}>Podcasts</div>
                                																<div className={styles.listenToExperts}>Listen to experts share insights, trends, and perspectives—on the go.</div>
                              															</div>
                            														</div>
                            														<div className={styles.button2}>
                              															<div className={styles.explorePodcasts}>Explore Podcasts</div>
                              															<Image className={styles.icon2} width={16} height={16} alt="" src="/images/arrow-icon.svg" />
                            														</div>
                          													</div>
                        												</div>
                      											</div>
                      											<div className={styles.container42}>
                        												<div className={styles.container43} />
                        												<div className={styles.app11}>
                          													<Image className={styles.containerIcon10} width={261} height={192} alt="" src="/images/videos-image.png" />
                          													<div className={styles.container44}>
                            														<div className={styles.videosParent}>
                              															<div className={styles.podcasts}>Videos</div>
                              															<div className={styles.paragraph7}>
                                																<div className={styles.shortVideosThat}>Short videos that simplify investing through visuals. Easy to watch, easy to understand.</div>
                              															</div>
                            														</div>
                            														<div className={styles.button2}>
                              															<div className={styles.exploreVideos}>Explore Videos</div>
                              															<Image className={styles.icon3} width={16} height={16} alt="" src="/images/arrow-icon.svg" />
                            														</div>
                          													</div>
                        												</div>
                      											</div>
                      											<div className={styles.container45}>
                        												<div className={styles.container46} />
                        												<div className={styles.app12}>
                          													<Image className={styles.containerIcon10} width={260} height={192} alt="" src="/images/playlists-image.png" />
                          													<div className={styles.container47}>
                            														<div className={styles.heading3Parent4}>
                              															<div className={styles.heading35} />
                              															<div className={styles.paragraph8}>
                                																<div className={styles.playlistsParent}>
                                  																	<div className={styles.podcasts}>Playlists</div>
                                  																	<div className={styles.curatedVideosTo}>Curated videos to simplify investing concepts—learn anytime, at your own pace.</div>
                                																</div>
                              															</div>
                            														</div>
                            														<div className={styles.button2}>
                              															<div className={styles.explorePlaylists}>Explore Playlists</div>
                              															<Image className={styles.icon4} width={16} height={16} alt="" src="/images/arrow-icon.svg" />
                            														</div>
                          													</div>
                        												</div>
                      											</div>
                    										</div>
                  									</div>
                  									<div className={styles.container48}>
                    										<div className={styles.container34}>
                      											<div className={styles.app}>
                        												<div className={styles.chooseHowYou2}>Choose How you Learn</div>
                      											</div>
                      											<div className={styles.app14}>
                        												<div className={styles.pickTheFormat}>Pick the format that works best for your learning style</div>
                      											</div>
                    										</div>
                    										<div className={styles.container50}>
                      											<div className={styles.container51}>
                        												<div className={styles.container37} />
                        												<div className={styles.app9}>
                          													<Image className={styles.containerIcon9} width={260} height={192} alt="" src="/images/blogs-image.png" />
                          													<div className={styles.container38}>
                            														<div className={styles.heading3Parent3}>
                              															<div className={styles.heading35}>
                                																<div className={styles.easyToReadArticlesOnMarkeParent}>
                                  																	<div className={styles.easyToReadArticlesOn}>Easy-to-read articles on markets, mutual funds, and smart investing practices.</div>
                                  																	<div className={styles.blogs}>Blogs</div>
                                																</div>
                              															</div>
                              															<div className={styles.paragraph5} />
                            														</div>
                            														<div className={styles.button}>
                              															<div className={styles.exploreBlogs}>Explore Blogs</div>
                              															<Image className={styles.icon} width={16} height={16} alt="" src="/images/arrow-icon.svg" />
                            														</div>
                          													</div>
                        												</div>
                      											</div>
                      											<div className={styles.container54}>
                        												<div className={styles.container40} />
                        												<div className={styles.app10}>
                          													<Image className={styles.containerIcon10} width={261} height={192} alt="" src="/images/podcasts-image.png" />
                          													<div className={styles.container41}>
                            														<div className={styles.heading36} />
                            														<div className={styles.paragraph6}>
                              															<div className={styles.podcastsParent}>
                                																<div className={styles.podcasts}>Podcasts</div>
                                																<div className={styles.listenToExperts}>Listen to experts share insights, trends, and perspectives—on the go.</div>
                              															</div>
                            														</div>
                            														<div className={styles.button2}>
                              															<div className={styles.explorePodcasts}>Explore Podcasts</div>
                              															<Image className={styles.icon2} width={16} height={16} alt="" src="/images/arrow-icon.svg" />
                            														</div>
                          													</div>
                        												</div>
                      											</div>
                      											<div className={styles.container42}>
                        												<div className={styles.container43} />
                        												<div className={styles.app11}>
                          													<div className={styles.container59}>
                            														<Image className={styles.imageVideosIcon} width={260.5} height={192} alt="" src="/images/videos-image-2.png" />
                            														<div className={styles.container60} />
                            														<Image className={styles.containerIcon15} width={96} height={96} alt="" src="/images/play-icon.svg" />
                            														<div className={styles.container61}>
                              															<b className={styles.videos2}>100+ Videos</b>
                            														</div>
                          													</div>
                          													<div className={styles.container62}>
                            														<div className={styles.videosParent}>
                              															<div className={styles.podcasts}>Videos</div>
                              															<div className={styles.paragraph7}>
                                																<div className={styles.shortVideosThat}>Short videos that simplify investing through visuals. Easy to watch, easy to understand.</div>
                              															</div>
                            														</div>
                            														<div className={styles.button2}>
                              															<div className={styles.exploreVideos}>Explore Videos</div>
                              															<Image className={styles.icon3} width={16} height={16} alt="" src="/images/arrow-icon.svg" />
                            														</div>
                          													</div>
                        												</div>
                      											</div>
                      											<div className={styles.container63}>
                        												<div className={styles.container46} />
                        												<div className={styles.app12}>
                          													<Image className={styles.containerIcon10} width={260} height={192} alt="" src="/images/playlists-image.png" />
                          													<div className={styles.container47}>
                            														<div className={styles.heading3Parent4}>
                              															<div className={styles.heading35} />
                              															<div className={styles.paragraph8}>
                                																<div className={styles.playlistsParent}>
                                  																	<div className={styles.podcasts}>Playlists</div>
                                  																	<div className={styles.curatedVideosTo}>Curated videos to simplify investing concepts—learn anytime, at your own pace.</div>
                                																</div>
                              															</div>
                            														</div>
                            														<div className={styles.button2}>
                              															<div className={styles.explorePlaylists}>Explore Playlists</div>
                              															<Image className={styles.icon4} width={16} height={16} alt="" src="/images/arrow-icon.svg" />
                            														</div>
                          													</div>
                        												</div>
                      											</div>
                    										</div>
                  									</div>
                								</div>
                								<div className={styles.container66}>
                  									<div className={styles.container67}>
                    										<div className={styles.container68} />
                    										<div className={styles.container69} />
                  									</div>
                  									<div className={styles.container70}>
                    										<Image className={styles.containerIcon17} width={65.6} height={65.6} alt="" src="/images/star-icon.svg" />
                    										<div className={styles.joinThousandsOf}>Join thousands of investors who are building their financial knowledge every day</div>
                    										<div className={styles.heading2}>
                      											<b className={styles.readyToStart}>Ready to Start Your Learning Journey?</b>
                        												</div>
                        												<div className={styles.container71}>
                          													<div className={styles.button9}>
                            														<b className={styles.getStartedFree}>Get Started Free</b>
                          													</div>
                          													<div className={styles.button10}>
                            														<b className={styles.browseLibrary}>Browse Library</b>
                          													</div>
                        												</div>
                        												</div>
                        												</div>
                        												<div className={styles.containerParent}>
                          													<div className={styles.container72}>
                            														<div className={styles.app19} />
                          													</div>
                          													<div className={styles.geminiGeneratedImagePq4zdwpParent}>
                            														<Image className={styles.geminiGeneratedImagePq4zdwpIcon} width={1440} height={668} alt="" src="/images/hero-image.png" />
                            														<div className={styles.image227Parent}>
                              															<Image className={styles.geminiGeneratedImagePq4zdwpIcon} width={1440} height={668} alt="" src="/images/hero-image-2.png" />
                              															<div className={styles.groupChild11} />
                              															<div className={styles.groupChild12} />
                            														</div>
                          													</div>
                          													<div className={styles.groupParent2}>
                            														<div className={styles.planYourInvestmentsWithPurParent}>
                              															<div className={styles.planYourInvestments}>Build your understanding of mutual funds through structured learning designed for investors at every stage of their journey.</div>
                              															<div className={styles.learnToInvest}>{`Learn to invest with clarity & confidence`}</div>
                            														</div>
                            														<div className={styles.buttonParent}>
                              															<div className={styles.button11} />
                              															<div className={styles.button12}>
                                																<div className={styles.button13}>{`View Learn `}</div>
                                																<div className={styles.iconfeatherIcon}>
                                  																	<Image className={styles.vectorIcon4} width={14} height={2} alt="" src="/images/arrow-right.svg" />
                                  																	<Image className={styles.vectorIcon5} width={7} height={14} alt="" src="/images/arrow-right-2.svg" />
                                																</div>
                              															</div>
                            														</div>
                          													</div>
                          													<div className={styles.component29}>
                            														<div className={styles.div}>
                              															<div className={styles.learn3}>
                                																<Image className={styles.modelHouseWithHouseTopItIcon} width={355} height={285} alt="" src="/images/card-1.png" />
                                																<div className={styles.learnChild} />
                                																<div className={styles.planYourDreamVacationAndTParent}>
                                  																	<div className={styles.planYourDream}>Two popular approaches, one important goal. Understand how time, discipline, and strategy make the difference.</div>
                                  																	<div className={styles.sipVsLumpsum}>SIP vs Lumpsum – Who reaches 1 crore first?</div>
                                    																		</div>
                                    																		</div>
                                    																		</div>
                                    																		<div className={styles.div}>
                                      																			<div className={styles.learn3}>
                                        																				<Image className={styles.icon10} width={355} height={285} alt="" src="/images/card-2.png" />
                                        																				<div className={styles.learnChild} />
                                        																				<div className={styles.planYourDreamVacationAndTGroup}>
                                          																					<div className={styles.planYourDream2}>See how modern investors are shaping their financial journey. Simple visuals that explain why investing early matters.</div>
                                          																					<div className={styles.sipVsLumpsum}>Join the Investment Trend</div>
                                        																				</div>
                                      																			</div>
                                    																		</div>
                                    																		<div className={styles.div}>
                                      																			<div className={styles.learn3}>
                                        																				<Image className={styles.icon11} width={355} height={285} alt="" src="/images/card-3.png" />
                                        																				<div className={styles.learnChild} />
                                        																				<div className={styles.planYourDreamVacationAndTContainer}>
                                          																					<div className={styles.planYourDream}>Explore thoughtful investing strategies through expert conversations. Gain insights into building value steadily through mutual funds.</div>
                                          																					<div className={styles.sipVsLumpsum}>Value Investing through Mutual Funds</div>
                                        																				</div>
                                      																			</div>
                                    																		</div>
                                    																		<div className={styles.div}>
                                      																			<div className={styles.learn3}>
                                        																				<Image className={styles.modelHouseWithHouseTopItIcon} width={355} height={285} alt="" src="/images/card-4.png" />
                                        																				<div className={styles.learnChild} />
                                        																				<div className={styles.planYourDreamVacationAndTParent2}>
                                          																					<div className={styles.planYourDream2}>Discover how small, regular investments can build long-term discipline. Learn why SIP remains a preferred approach for many investors.</div>
                                          																					<div className={styles.sipVsLumpsum}>What is SIP?</div>
                                            																						</div>
                                            																						</div>
                                            																						</div>
                                            																						<div className={styles.div}>
                                              																							<div className={styles.learn3}>
                                                																								<Image className={styles.modelHouseWithHouseTopItIcon} width={355} height={285} alt="" src="/images/card-5.png" />
                                                																								<div className={styles.learnChild} />
                                                																								<div className={styles.planYourDreamVacationAndTContainer}>
                                                  																									<div className={styles.planYourDream}>Understand your investment comfort before making decisions. Risk profiling helps you choose investments that truly suit you.</div>
                                                  																									<div className={styles.sipVsLumpsum}>What is Risk Profiling, and How to Use it?</div>
                                                    																										</div>
                                                    																										</div>
                                                    																										</div>
                                                    																										<div className={styles.blog}>
                                                      																											<Image className={styles.blogger3Icon} width={55} height={55} alt="" src="/images/blog-icon.png" />
                                                    																										</div>
                                                    																										<div className={styles.blog2}>
                                                      																											<Image className={styles.blogger4Icon} width={24} height={24} alt="" src="/images/small-blog-icon.svg" />
                                                    																										</div>
                                                    																										<div className={styles.playlist}>
                                                      																											<Image className={styles.blogger4Icon} width={24} height={24} alt="" src="/images/playlist-icon.svg" />
                                                    																										</div>
                                                    																										<div className={styles.podcast}>
                                                      																											<Image className={styles.blogger4Icon} width={24} height={24} alt="" src="/images/podcast-icon.svg" />
                                                    																										</div>
                                                    																										<div className={styles.video}>
                                                      																											<Image className={styles.blogger4Icon} width={24} height={24} alt="" src="/images/video-icon.svg" />
                                                    																										</div>
                                                    																										</div>
                                                    																										</div>
                                                    																										</div>);
}
