import static org.junit.Assert.assertArrayEquals;
import org.junit.Test;
import org.junit.runners.JUnit4;
import java.util.Arrays;

public class SolutionTest {

    @Test
    public void basicTest1() {
        String[] result = new String[] { "Hello", "hEllo", "heLlo", "helLo", "hellO" };
        assertArrayEquals("it should return '" + Arrays.toString(result) + "'", result, MexicanOla.wave("hello"));
    }

    @Test
    public void basicTest2() {
        String[] result = new String[] { "Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS" };
        assertArrayEquals("it should return '" + Arrays.toString(result) + "'", result, MexicanOla.wave("codewars"));
    }

    @Test
    public void basicTest3() {
        String[] result = new String[] { };
        assertArrayEquals("it should return '" + Arrays.toString(result) + "'", result, MexicanOla.wave(""));
    }

    @Test
    public void basicTest4() {
        String[] result = new String[] { "Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS" };
        assertArrayEquals("it should return '" + Arrays.toString(result) + "'", result, MexicanOla.wave("two words"));
    }

    @Test
    public void basicTest5() {
        String[] result = new String[] { " Gap ", " gAp ", " gaP " };
        assertArrayEquals("it should return '" + Arrays.toString(result) + "'", result, MexicanOla.wave(" gap "));
    }

    @Test
    public void randomTest() {
        String[] result = new String[] {"Sic  yypaa nhlita", "sIc  yypaa nhlita", "siC  yypaa nhlita", "sic  Yypaa nhlita", "sic  yYpaa nhlita", "sic  yyPaa nhlita", "sic  yypAa nhlita", "sic  yypaA nhlita", "sic  yypaa Nhlita", "sic  yypaa nHlita", "sic  yypaa nhLita", "sic  yypaa nhlIta", "sic  yypaa nhliTa", "sic  yypaa nhlitA" };
        assertArrayEquals("it should return '" + Arrays.toString(result) + "'", result, MexicanOla.wave("sic  yypaa nhlita"));
    }

    @Test
    public void randomTest2() {
        String[] result = new String[] {"Qm f  fdhwgjlfa", "qM f  fdhwgjlfa", "qm F  fdhwgjlfa", "qm f  Fdhwgjlfa", "qm f  fDhwgjlfa", "qm f  fdHwgjlfa", "qm f  fdhWgjlfa", "qm f  fdhwGjlfa", "qm f  fdhwgJlfa", "qm f  fdhwgjLfa", "qm f  fdhwgjlFa", "qm f  fdhwgjlfA"};
        assertArrayEquals("it should return '" + Arrays.toString(result) + "'", result, MexicanOla.wave( "qm f  fdhwgjlfa"));
    }
}