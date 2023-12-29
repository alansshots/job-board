import React from 'react'
import { CheckCircle, LogIn } from 'react-feather'
import { Link, useNavigate } from 'react-router-dom'

function RegisterConfirmation() {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col items-center justify-center'>
        <svg className='my-10' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="400" height="200" viewBox="0 0 897.5 585.99121" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M748.23462,693.189l-1.11768-1.6582q2.47889-1.67065,4.92188-3.38916l1.15112,1.63574Q750.73084,691.50806,748.23462,693.189Z" transform="translate(-151.25 -157.00439)" fill="#ccc"/><path d="M586.88208,742.99561l-.01416-2c4.04395-.02881,8.13184-.14209,12.14966-.33643l.09668,1.99805C595.06885,742.85254,590.95337,742.96631,586.88208,742.99561Zm-12.23511-.16309c-4.06054-.1377-8.17114-.36182-12.21753-.667l.15039-1.99414c4.019.30273,8.10181.52588,12.135.66211Zm36.6709-1.01758-.17871-1.99219c4.01367-.36035,8.07666-.81054,12.07593-1.33886l.262,1.98242C619.4502,740.99854,615.35938,741.45215,611.31787,741.81494Zm-61.0686-.82129c-4.04224-.47412-8.12012-1.03906-12.12085-1.6792l.31592-1.97461c3.97314.63526,8.02343,1.19629,12.03784,1.66748Zm85.31958-2.38232-.34424-1.96973c3.96875-.69385,7.98-1.48242,11.92236-2.34375l.42676,1.9541C643.60425,737.11914,639.56519,737.91309,635.56885,738.61133Zm-109.48023-1.48145c-3.97924-.80859-7.99585-1.71289-11.938-2.688l.48-1.9414c3.91528.96826,7.90429,1.86621,11.85644,2.66943Zm133.38086-3.73974-.5083-1.93457c3.8999-1.02539,7.83081-2.14795,11.68408-3.33643l.5896,1.91113C667.355,731.22705,663.39648,732.35742,659.46948,733.39014Zm-157.16089-2.14453c-3.90161-1.14209-7.83593-2.38379-11.69336-3.69141l.64209-1.89453c3.83106,1.29883,7.73829,2.53222,11.6128,3.666Zm180.5398-5.06788L682.179,724.293c3.8-1.34961,7.623-2.79883,11.363-4.30713l.748,1.85449C690.52417,723.35938,686.67456,724.81885,682.84839,726.17773Zm-203.7583-2.80419c-3.79712-1.46875-7.61109-3.03711-11.33545-4.66114l.79932-1.833c3.699,1.6128,7.48657,3.16993,11.25781,4.62891Zm226.4497-6.34766-.82568-1.82129c3.678-1.667,7.36621-3.43213,10.96216-5.24707l.90137,1.78516C712.95679,713.57031,709.24292,715.34766,705.53979,717.02588Zm-248.91259-3.4458c-3.65479-1.77979-7.322-3.66211-10.89966-5.59375l.95019-1.75977c3.55323,1.91846,7.19532,3.7876,10.8252,5.55567ZM727.38452,706.002l-.9751-1.74609c3.5232-1.96729,7.051-4.03516,10.48536-6.146l1.04736,1.7041C734.48389,701.939,730.93188,704.021,727.38452,706.002Zm-292.311-4.061c-3.48853-2.07715-6.98413-4.25879-10.39014-6.48438l1.09424-1.67383c3.38257,2.21,6.85425,4.377,10.31885,6.43946Zm-20.499-13.39453c-3.30224-2.36035-6.603-4.82471-9.81054-7.32471l1.22949-1.57715c3.18579,2.48291,6.46411,4.93067,9.74414,7.2749Zm-19.30664-15.04981c-3.09985-2.63086-6.18384-5.36035-9.166-8.1123l1.35644-1.46973c2.96192,2.7334,6.0249,5.44434,9.10352,8.05664Zm-17.98535-16.59619c-2.86841-2.87646-5.71448-5.85107-8.459-8.8418l1.47363-1.35254c2.72583,2.97071,5.55249,5.9253,8.40137,8.78223ZM360.73987,638.875c-2.6156-3.09912-5.20423-6.29834-7.69409-9.50977l1.58056-1.22558c2.473,3.18945,5.04407,6.36719,7.64185,9.44531ZM345.75476,619.544c-2.35144-3.3086-4.66467-6.71094-6.87512-10.11329l1.67712-1.08984c2.19544,3.37891,4.49268,6.75879,6.82813,10.04492ZM332.43335,599.041c-2.06751-3.49219-4.08826-7.07471-6.0061-10.647l1.7622-.94629c1.90467,3.54834,3.9115,7.106,5.965,10.57471Zm-11.56043-21.53467c-1.767-3.64942-3.48034-7.38672-5.09252-11.10742l1.8352-.79493c1.60107,3.69483,3.30261,7.40625,5.0575,11.03125Zm-9.71337-22.415c-1.45618-3.78906-2.85083-7.6582-4.145-11.50049l1.89526-.63867c1.28552,3.81592,2.67041,7.65869,4.11658,11.42139Z" transform="translate(-151.25 -157.00439)" fill="#ccc"/><path d="M303.32239,531.80762q-.8379-2.88722-1.61792-5.79932l1.93188-.51758q.77436,2.89161,1.60669,5.75928Z" transform="translate(-151.25 -157.00439)" fill="#ccc"/><path d="M873.94312,417.39209q-.33216-2.97657-.72339-5.93457l1.98266-.2627q.39441,2.97876.72852,5.97559Z" transform="translate(-151.25 -157.00439)" fill="#ccc"/><path d="M848.06592,578.66016l-1.79639-.8794c1.718-3.50976,3.38794-7.104,4.96314-10.68359l1.83056.80566C851.47705,571.50732,849.7959,575.12646,848.06592,578.66016Zm9.55249-21.71045-1.86182-.73047c1.42725-3.63819,2.79907-7.35645,4.07715-11.05176l1.89014.65332C860.437,549.542,859.05566,553.28613,857.61841,556.94971Zm7.7539-22.41553-1.91552-.57617c1.12744-3.749,2.19165-7.56739,3.16284-11.34912l1.937.49756C867.57861,526.91406,866.50732,530.75879,865.37231,534.53418Zm5.9004-22.9751-1.95557-.418c.81714-3.82275,1.56689-7.71533,2.22827-11.56982l1.97119.33789C872.85059,503.79053,872.0957,507.71045,871.27271,511.55908Zm4.01269-23.38086-1.9834-.25781c.50391-3.87109.936-7.812,1.28418-11.71338l1.99219.17774C876.22754,480.313,875.79272,484.28076,875.2854,488.17822Zm2.10986-23.63037-1.99755-.09765c.19067-3.89844.30517-7.86182.34033-11.7793l2,.01758C877.70239,456.63281,877.58716,460.62305,877.39526,464.54785Zm-1.7854-23.66162c-.12011-3.91016-.32129-7.86816-.59765-11.76367l1.99511-.1416c.27808,3.92236.48047,7.90722.60157,11.84375Z" transform="translate(-151.25 -157.00439)" fill="#ccc"/><path d="M839.73633,594.43652l-1.73926-.9873q1.47363-2.59717,2.89575-5.22656l1.75928.95117Q841.22058,591.82152,839.73633,594.43652Z" transform="translate(-151.25 -157.00439)" fill="#ccc"/><path d="M321.92273,324.93311l-1.80542-.86036q1.29639-2.71947,2.64673-5.40771l1.78735.89746Q323.21051,322.2329,321.92273,324.93311Z" transform="translate(-151.25 -157.00439)" fill="#ccc"/><path d="M330.136,308.99316l-1.74866-.9707c1.93909-3.49365,3.97656-6.99267,6.05591-10.40137l1.70727,1.042C334.08545,302.04785,332.06189,305.52344,330.136,308.99316Zm504.06421-8.92627c-2.04273-3.3916-4.18677-6.7915-6.37281-10.105l1.66944-1.10156c2.20092,3.33643,4.35986,6.75977,6.41674,10.17432Zm-491.61475-11.481-1.66309-1.11035c2.219-3.32227,4.53711-6.644,6.89-9.87207l1.61621,1.17773C347.09167,281.98779,344.78943,285.28662,342.58545,288.58594Zm478.45972-8.46c-2.31812-3.21827-4.73365-6.43164-7.17969-9.55078l1.57373-1.23438c2.46289,3.14063,4.895,6.376,7.229,9.61621Zm-464.3783-10.85987-1.56665-1.24316c2.484-3.13037,5.06555-6.25049,7.67285-9.27393l1.51441,1.30664C361.69788,263.05811,359.134,266.15674,356.66687,269.26611Zm449.63367-7.9414c-2.5752-3.021-5.24561-6.02735-7.937-8.93506l1.46777-1.3584c2.70972,2.92773,5.39844,5.9541,7.99121,8.99561ZM372.27759,251.16406l-1.46-1.36718c2.7279-2.91358,5.55493-5.8125,8.40258-8.61524l1.40308,1.42481C377.79492,245.39062,374.98706,248.27,372.27759,251.16406Zm417.79-7.37842c-2.80982-2.79785-5.717-5.57666-8.64087-8.25927l1.35205-1.47364c2.94385,2.70118,5.87085,5.499,8.69995,8.31592ZM389.31055,234.398l-1.34375-1.48145c2.95678-2.68164,6.01049-5.33984,9.07592-7.90039l1.28223,1.53516C395.28,229.09424,392.24731,231.73438,389.31055,234.398Zm383.14453-6.77149c-3.031-2.561-6.15576-5.09375-9.2876-7.52783l1.22705-1.5791c3.15357,2.45068,6.29981,5.001,9.35156,7.57959Zm-364.80347-8.54687-1.21826-1.58594c3.16455-2.43066,6.42456-4.83008,9.68945-7.13183l1.15235,1.63476C414.03247,214.28271,410.79468,216.666,407.65161,219.07959Zm345.927-6.12354c-3.231-2.30517-6.553-4.57421-9.87378-6.74414l1.09375-1.67431c3.34375,2.18506,6.68848,4.46924,9.94165,6.79052ZM427.17944,205.314,426.095,203.6333c3.35327-2.16357,6.7981-4.2876,10.23877-6.313l1.01465,1.72364C433.93115,201.05566,430.50977,203.165,427.17944,205.314Zm306.38135-5.43554c-3.40625-2.03125-6.904-4.02051-10.396-5.91211l.95264-1.75879c3.51611,1.90478,7.03809,3.90771,10.46778,5.95312Zm-285.79541-6.68213-.94287-1.76367c3.52246-1.88282,7.12939-3.71631,10.7207-5.44971l.86939,1.80078C454.846,189.50537,451.26367,191.32666,447.76538,193.19629Zm264.76758-4.71c-3.57422-1.749-7.22485-3.44336-10.85059-5.03613l.8042-1.83106c3.65113,1.60352,7.32691,3.30957,10.9253,5.07129Zm-243.26123-5.67041-.79444-1.83594c3.66041-1.5835,7.405-3.11328,11.13062-4.54639l.71777,1.86719C476.626,179.72363,472.90674,181.24268,469.27173,182.81592Zm221.36011-3.9502c-3.69678-1.44433-7.47608-2.832-11.23291-4.12353l.65039-1.8916c3.78271,1.30078,7.58838,2.69775,11.31054,4.15234Zm-199.07691-4.61914-.64014-1.89453c3.7837-1.27832,7.64087-2.49316,11.46436-3.61084l.561,1.91992C499.14307,171.771,495.3125,172.97754,491.55493,174.24658Zm176.44824-3.15967c-3.80761-1.13476-7.68994-2.20507-11.5393-3.18066l.49121-1.93848c3.876.98243,7.7854,2.05957,11.61938,3.20215Zm-153.5415-3.53808-.48145-1.94141c3.87427-.96045,7.8169-1.85254,11.71851-2.65039l.40088,1.959C522.22485,165.709,518.30933,166.59473,514.46167,167.54883Zm130.33813-2.34229c-3.8706-.8125-7.822-1.55664-11.74462-2.2124l.32959-1.97266c3.9497.66016,7.92871,1.40967,11.82617,2.228Zm-106.94409-2.44433-.31982-1.97461c3.9414-.63867,7.95068-1.20362,11.916-1.6792l.23829,1.98535C545.752,161.56641,541.77026,162.12793,537.85571,162.76221Zm83.37329-1.49463c-3.92675-.49121-7.92578-.90869-11.88647-1.23975l.1665-1.99316c3.988.33349,8.01465.75342,11.96851,1.24853Zm-59.646-1.355-.157-1.99414c3.97924-.313,8.02075-.54883,12.01269-.70069l.07568,1.99854C569.54956,159.36719,565.53516,159.60107,561.583,159.9126Zm35.83178-.63867c-3.96044-.16895-7.98046-.25977-11.94873-.26954l.00489-2c3.99487.00977,8.042.10108,12.02929.27149Z" transform="translate(-151.25 -157.00439)" fill="#ccc"/><path d="M843.01782,315.78809q-1.38171-2.65357-2.81592-5.27442l1.7544-.96q1.44433,2.63892,2.83545,5.31055Z" transform="translate(-151.25 -157.00439)" fill="#ccc"/><path d="M520.75,353.00342h-18.5v156.5a15.01828,15.01828,0,0,1-15,15H184.75v13.5a17.02411,17.02411,0,0,0,17,17h319a17.02411,17.02411,0,0,0,17-17v-168A17.0241,17.0241,0,0,0,520.75,353.00342Z" transform="translate(-151.25 -157.00439)" fill="#f2f2f2"/><path d="M487.25,324.50342h-319a17.0241,17.0241,0,0,0-17,17v168a17.02411,17.02411,0,0,0,17,17h319a17.02411,17.02411,0,0,0,17-17v-168A17.0241,17.0241,0,0,0,487.25,324.50342Zm15,185a15.01828,15.01828,0,0,1-15,15h-319a15.01828,15.01828,0,0,1-15-15v-168a15.01828,15.01828,0,0,1,15-15h319a15.01828,15.01828,0,0,1,15,15Z" transform="translate(-151.25 -157.00439)" fill="#3f3d56"/><path d="M463.191,448.50342h-112a8,8,0,1,1,0-16h112a8,8,0,0,1,0,16Z" transform="translate(-151.25 -157.00439)" fill="#ccc"/><path d="M393.191,414.50342h-42a8,8,0,1,1,0-16h42a8,8,0,0,1,0,16Z" transform="translate(-151.25 -157.00439)" fill="#ccc"/><path d="M300.75,488.50342h-102a8.50958,8.50958,0,0,1-8.5-8.5v-113a8.50958,8.50958,0,0,1,8.5-8.5h102a8.50958,8.50958,0,0,1,8.5,8.5v113A8.50958,8.50958,0,0,1,300.75,488.50342Z" transform="translate(-151.25 -157.00439)" fill="#6c63ff"/><path d="M251.29364,464.96643c-2.24912-.06278-5.04827-.1415-7.20339-1.71586a5.53254,5.53254,0,0,1-2.17687-4.13089,3.72128,3.72128,0,0,1,1.26547-3.05606,4.80152,4.80152,0,0,1,4.54274-.654l-1.83609-13.41832,1.34784-.18467,2.15861,15.77488-1.12547-.51648c-1.305-.59853-3.09626-.90277-4.20944.03753a2.39,2.39,0,0,0-.784,1.969,4.18128,4.18128,0,0,0,1.61971,3.08031c1.67716,1.22562,3.90834,1.38372,6.43912,1.4548Z" transform="translate(-151.25 -157.00439)" fill="#3f3d56"/><rect x="80.64257" y="286.14411" width="7.32728" height="1.36046" fill="#3f3d56"/><rect x="103.77047" y="286.14411" width="7.32728" height="1.36046" fill="#3f3d56"/><path d="M219.16256,424.36212c-5.90049-.67285-10.47028-6.32632-10.97221-12.06254-.59712-6.82417,3.37707-13.30557,8.82937-17.135,5.70183-4.00469,12.80578-5.67705,19.67916-6.0452a54.085,54.085,0,0,1,36.96936,12.18542c5.15034,4.27761,9.96041,9.72655,11.78346,16.30818,1.58324,5.71587.29488,12.19122-4.30229,16.19444a10.86752,10.86752,0,0,1-8.33962,2.56769c-3.56706-.37038-6.85826-2.246-9.70719-4.31737-5.54175-4.02929-10.09125-9.64249-16.84288-11.74806-4.95054-1.54389-11.37484-.18492-14.40012,4.29192a8.14859,8.14859,0,0,0-1.301,3.41385,1.05668,1.05668,0,0,0,.71265,1.25515,1.02669,1.02669,0,0,0,1.25515-.71265c.79422-5.63871,7.72754-7.74276,12.59284-6.45506,7.09383,1.87753,11.85586,8.20776,17.67607,12.22959a21.48,21.48,0,0,0,10.29357,4.1086,12.78217,12.78217,0,0,0,8.9813-2.75908c4.97222-3.92623,6.87373-10.67923,5.77424-16.75919-1.27321-7.04068-6.01206-13.075-11.21157-17.74674a56.083,56.083,0,0,0-38.327-14.15861c-7.19249.1652-14.69716,1.65-20.89346,5.45153-6.01038,3.68746-10.65588,9.85657-11.26305,17.02754-.53443,6.31183,2.852,12.91368,8.66509,15.67891a13.57,13.57,0,0,0,4.34814,1.22738c1.3026.14853,1.292-1.89337,0-2.0407Z" transform="translate(-151.25 -157.00439)" fill="#3f3d56"/><path d="M1029.75,618.00342h-16.06006v52.32a17.02411,17.02411,0,0,1-17,17H595.75v7.68a19.01722,19.01722,0,0,0,19,19h415a19.01722,19.01722,0,0,0,19-19v-58A19.01722,19.01722,0,0,0,1029.75,618.00342Z" transform="translate(-151.25 -157.00439)" fill="#f2f2f2"/><path d="M996.68994,593.32343h-415a19.01722,19.01722,0,0,0-19,19v58a19.01722,19.01722,0,0,0,19,19h415a19.01722,19.01722,0,0,0,19-19v-58A19.01722,19.01722,0,0,0,996.68994,593.32343Zm17,77a17.02411,17.02411,0,0,1-17,17h-415a17.02411,17.02411,0,0,1-17-17v-58a17.0241,17.0241,0,0,1,17-17h415a17.0241,17.0241,0,0,1,17,17Z" transform="translate(-151.25 -157.00439)" fill="#3f3d56"/><path d="M654.52148,609.32617a32,32,0,1,0,32,32A32.03667,32.03667,0,0,0,654.52148,609.32617Z" transform="translate(-151.25 -157.00439)" fill="#6c63ff"/><path d="M947.86027,668.32625h-229a8,8,0,1,1,0-16h229a8,8,0,0,1,0,16Z" transform="translate(-151.25 -157.00439)" fill="#ccc"/><path d="M832.86027,634.32625h-114a8,8,0,1,1,0-16h114a8,8,0,0,1,0,16Z" transform="translate(-151.25 -157.00439)" fill="#ccc"/><path id="b075a903-93c9-45c1-bbfc-445555d45864-386" data-name="Path 395" d="M652.35149,655.31822a3.81206,3.81206,0,0,1-2.29333-.76217l-.041-.03077-8.63785-6.60768a3.8386,3.8386,0,0,1,4.671-6.09274l5.5949,4.29043L664.86621,628.867a3.837,3.837,0,0,1,5.37963-.71058l.00111.00084-.082.11393.08427-.11393a3.84161,3.84161,0,0,1,.70975,5.3807l-15.55086,20.27876a3.83926,3.83926,0,0,1-3.0532,1.497Z" transform="translate(-151.25 -157.00439)" fill="#fff"/><path d="M970.75,333.00342h-2.12012q.06006.645.06006,1.32v58a17.02411,17.02411,0,0,1-17,17H752.75v.68c0,.44.02.88.0498,1.32a19.00416,19.00416,0,0,0,18.9502,17.68h199a19.01722,19.01722,0,0,0,19-19v-58A19.01722,19.01722,0,0,0,970.75,333.00342Z" transform="translate(-151.25 -157.00439)" fill="#f2f2f2"/><path d="M970.64014,333.00342a19.00381,19.00381,0,0,0-18.9502-17.68h-199a19.01722,19.01722,0,0,0-19,19v58a19.01722,19.01722,0,0,0,19,19h199a19.01722,19.01722,0,0,0,19-19v-58C970.68994,333.88342,970.66992,333.44342,970.64014,333.00342Zm-1.9502,59.32a17.02411,17.02411,0,0,1-17,17h-199a17.02411,17.02411,0,0,1-17-17v-58a17.0241,17.0241,0,0,1,17-17h199a17.01629,17.01629,0,0,1,16.93994,15.68q.06006.645.06006,1.32Z" transform="translate(-151.25 -157.00439)" fill="#3f3d56"/><path d="M901.191,388.32625h-98a8,8,0,1,1,0-16h98a8,8,0,0,1,0,16Z" transform="translate(-151.25 -157.00439)" fill="#ccc"/><path d="M871.191,354.32625h-68a8,8,0,1,1,0-16h68a8,8,0,0,1,0,16Z" transform="translate(-151.25 -157.00439)" fill="#ccc"/></svg>
        <h2 className='flex'>Успешна регистрация <CheckCircle className='mx-0.5'></CheckCircle></h2>
        <Link to="/login" className='underline pointer'>Влез в акаунт.</Link>
    </div>
  )
}

export default RegisterConfirmation